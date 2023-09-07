// Ejercicio 1: Declaración de variables
        // Instrucciones: Declara dos variables numéricas llamadas 'edad' y 'anioNacimiento'.
        // Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.
        function declararVariables() {
            let edad;
            let añoNacimiento = prompt('Ingrese su año de nacimiento');

            añoNacimiento = 2023 - añoNacimiento;
            edad = añoNacimiento;
        }

        // Ejercicio 2: Asignación de valores
        // Instrucciones: Completa la función para asignar el valor de 'x' a 'y' y luego muestra el valor de 'y'.
        function asignarValores() {
            let x = 15;
            let y = x;

            alert(y);

            // Tu código aquí
        }

        // Ejercicio 3: Operaciones matemáticas
        // Instrucciones: Completa la función para realizar las siguientes operaciones:
        // Suma 'a' y 'b', resta 'b' de 'a', multiplica 'a' por 'b', y divide 'a' entre 'b'.
        // Muestra los resultados en un mensaje.
        function realizarOperaciones() {
            let a = 50;
            let b = 10;
            let resultado = null;
            
            resultado = a + b, b - a, a * b, a / b; 

            alert (a);
        }

        // Ejercicio 4: Manipulación de cadenas
        // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'nombre' y 'apellido'.
        // Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
        function manipularCadenas() {
            let nombre = "Juan";
            let apellido = "Pérez";
            let frase; 

            frase = "Hola mi nombre es" + " " + nombre + " " + apellido;

            alert(frase);
        }