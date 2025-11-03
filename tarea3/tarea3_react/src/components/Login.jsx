import {useForm} from "../hooks/useForm";
export const Login = ({onLogin})=>{
    const {form, handleChange, handleReset} = useForm({
        userName: "",
        password: ""
    });
    const {userName, password} = form;
    const handleSubmit = (evento)=>{
        evento.preventDefault();
        onLogin(userName);
        handleReset();
        console.log(form);
    };
    return(
      <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={(evento) => handleSubmit(evento, onLogin)}>
        <label>Username:</label>
        <input
            type="text"
            name="username"
            placeholder="username aqui"
            value={username}
            onChange={handleChange}
              required
            />
            <label>Password:</label>
            <input
              type="password"
               name="password"
              placeholder="password aqui"
              value={password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );  
    
}