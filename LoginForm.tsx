import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './loginform.module.css';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    toast.success('Đăng nhập thành công');
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Vui lòng nhập email',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Định dạng email không đúng',
              },
            }}
            render={({ field }) => (
              <div>
                <label>Email</label>
                <input {...field} />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              minLength: {
                value: 8,
                message: 'Mật khẩu phải có ít nhất 8 ký tự',
              },
            }}
            render={({ field }) => (
              <div>
                <label>Mật khẩu</label>
                <input type="password" {...field} />
                {errors.password && (
                  <span className={styles.error}>
                    {errors.password.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
