import { login, signup } from '@/entities/member';

// TODO : 테스트를 위한 임시 폼으로, UI 별도 구현이 필요함.
export function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
