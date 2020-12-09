import React from 'react';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../Help/Error';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor="username"
          id="username"
          name="username"
          type="text"
          label="Usuário"
          {...username}
        />
        <Input
          htmlFor="email"
          id="email"
          name="email"
          type="text"
          label="E-mail"
          {...email}
        />
        <Input
          htmlFor="password"
          id="password"
          name="password"
          type="password"
          label="Senha"
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};
