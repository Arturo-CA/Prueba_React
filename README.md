### Backend

1. **Tecnologías Utilizadas:**

   - .NET Core
   - Entity Framework Core
   - SQL Server

2. **Instrucciones para Ejecutar el Backend:**

   - Clona el repositorio.
   - Navega a la carpeta del proyecto en la terminal.
   - Ejecuta el comando `dotnet restore` para restaurar los paquetes.
   - Abre el archivo `appsettings.json` y configura la cadena de conexión según tu entorno. Modifica el valor de `CadenaSQL` como se muestra a continuación:

     ```json
     {
       "ConnectionStrings": {
         "CadenaSQL": "Data Source=NombreDelServidor;Initial Catalog=DBuser;User ID=tuUsuario;Password=tuContraseña;"
       }
     }
     ```

     **Ejemplo:**

     ```json
     {
       "ConnectionStrings": {
         "CadenaSQL": "Data Source=DESKTOP-AOH77K3\\SQLEXPRESS;Initial Catalog=DBuser;Integrated Security=True;TrustServerCertificate=True;"
       }
     }
     ```

   - Ejecuta el comando `dotnet run` para iniciar el servidor API.
   - La API estará disponible en `https://localhost:5256`.

3. **Base de Datos:**

   - La base de datos `DBuser` y la tabla `Usuario` deben ser creadas utilizando las consultas SQL proporcionadas en el proyecto. Incluye el siguiente script para crear la base de datos y agregar datos de prueba:

     ```sql
     CREATE DATABASE DBuser;

     USE DBuser;

     CREATE TABLE Usuario (
       id INT PRIMARY KEY IDENTITY(1,1),
       Name NVARCHAR(100) NOT NULL,
       Username NVARCHAR(100) NOT NULL,
       Password NVARCHAR(100) NOT NULL,
       Email NVARCHAR(100) NOT NULL,
       PhoneNumber NVARCHAR(15)
     );

     INSERT INTO Usuario (Name, Username, Password, Email, PhoneNumber)
     VALUES ('Juan Perez', 'juanperez', 'password123', 'juan.perez@example.com', '5551234567'),('Maria Lopez', 'marialopez', 'password456', 'maria.lopez@example.com', '5557654321'),('Carlos Gomez', 'carlosgomez', 'password789', 'carlos.gomez@example.com', '5559876543'),('Ana Martinez', 'anamartinez', 'password012', 'ana.martinez@example.com', '5553456789');
     ```

### Frontend

1. **Tecnologías Utilizadas:**

   - React
   - Material UI
   - Fetch

2. **Instrucciones para Ejecutar el Frontend:**

   - Clona el repositorio.
   - Navega a la carpeta del proyecto en la terminal.
   - Ejecuta el comando `npm install` para instalar las dependencias.
   - Abre el archivo `src/appSettings.js` y verifica de que la URL de la API esté correctamente configurada:

     ```javascript
     // src/appSettings.js
     export const appSettings = {
       apiUrl: "http://localhost:5256/api/User",
     };
     ```

   - Ejecuta el comando `npm start` para iniciar la aplicación React.
   - La aplicación estará disponible en `http://localhost:5173`.
