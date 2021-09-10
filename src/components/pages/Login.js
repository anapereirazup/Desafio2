// import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
// import { ROUTES } from "../constants";
// import { flowService } from "../helpers/flow";

// export const Login = () => {
//   const [isAuth, setIsAuth] = useState(false);

//   const [{ username, password }] = useState({
//     // Nosso Mock
//     username: "test",
//     password: "pass"
//   });
//   const [formState, setFormState] = useState({
//     // valor que será populado com input do usuário
//     username: "",
//     password: ""
//   });
//   const [hasError, setHasError] = useState(false); // se os valores forem diferentes entre mock e o do user ele seta como true

//   useEffect(() => {
//     const isAuth = localStorage.getItem("@isAutenticate"); // verificamos se existe o token

//     if (isAuth) {
//       // se existir passamos como true
//       setIsAuth(true);
//     }
//   }, []);

//   const handleChange = (event) => {
//     // Nosso evento para capturar os inputs
//     const { name, value } = event.target; // Desestruturamos os valores name e value

//     setFormState({
//       ...formState,
//       [name]: value // passamos name como chave (tem que ser igual ao declarado no useState()) e atribuimos o value para cada um deles
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Evitamos que o evento do botão se propague em outros locais
//     if (username !== formState.username || password !== formState.password) {
//       // validamos se as informações não  batem
//       setHasError(true); // ai mostramos o erro

//       return;
//     }
//     localStorage.setItem("@isAutenticate", "logado"); // Deu certo, vamos setar nosso token
//     flowService.goTo(ROUTES.HOME); // Mandaremos para a nossa Home
//   };

//   return (
//     <>
//       {isAuth ? ( // Se estiver logado, ele sera redirecionado para a Home, não faria sentido aparecer a tela de login novamente =D
//         <Redirect to={ROUTES.HOME} />
//       ) : (
//         <>
//           <input
//             placeholder="Username"
//             name="username"
//             onChange={handleChange}
//           />
//           <input
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//           />
//           <button onClick={handleSubmit}>Login</button>
//           <p>username: test </p>
//           <p>password: pass </p>
//           {/* nossa mensagem de erro aparece quando colocar as infos erradas */}
//           {hasError && <p>Login or pass invalid</p>}{" "}
//         </>
//       )}
//     </>
//   );
// };
