import styles from './SignIn.module.css';
import { AuthForm } from '../../components/AuthForm';

export const SignIn = () => {
  return (
    <div className={styles.body}>
      {/* Left Panel: Login Form */}
      <div className={styles.leftPanel}>
        <div className={styles.loginContainer}>
            <div className={styles.header}>
                <h1>Welcome Back</h1>
                <p>Sign in to your account to continue</p>
            </div>

            <AuthForm />

        </div>
    </div>

      {/* Right Panel: Logo Image Fills Area */}
      <div className={styles.rightPanel}>
        <img src="https://z-cdn-media.chatglm.cn/files/d7c9fb58-a820-4d28-8d3b-b4ef89ec6b41.png?auth_key=1868389321-1f055993c87646d499619dad60e8ef38-0-9a1b57e50ff6c72e0d1e27ada57583ca" alt="Sanaptic Logo" className={styles.brandFullImage} />
      </div>
    </div>
  );
};
