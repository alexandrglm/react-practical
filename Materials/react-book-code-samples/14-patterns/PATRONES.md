# 8. Patrones y buenas prácticas
## Introducción

React tiene unas peculiaridades respecto a otros, pero, al igual que todos, ha desarrollado diferentes prácticas comunes, patrones o buenos usos en general. En este capítulo se han recopilado algunas prácticas bien conocidas; en algunos casos, ya se han mostrado previamente y, en otros, se trata de aplicar las nuevas capacidades que ofrecen las últimas versiones del estándar de ECMAScript, en especial a partir de ES6.

## Componente Function

Se trata de componentes React sin estado que lo único que hacen es mostrar un contenido con o sin propiedades. Este tipo de componentes pueden reescribirse para tener forma de función y no es necesario crear una clase con un método render().
La propia función es, de esta forma, un componente React y los parámetros de la misma, si es que se pasan, sus properties. En general, es deseable tener componentes de este tipo, ya que su desarrollo, testing y gestión es mucho más sencilla y ante todo facilitan su reutilización.

##### About.js

Este ejemplo muestra un componente que simplemente devuelve un bloque con cierta información. La información puede venir como parámetros o en su defecto en unos valores predeterminados que se han definido dentro de defaultProps.
Cabe reseñar que es preciso importar la librería React, pese a que no se utilice de forma explícita.

__.1. Fichero About.js.__

```JavaScript
const defaultProps = {
    author: "Pello Altadill",
    version: "v1.0.0"
};

function About ({author, version} = defaultProps) {
    return <div>
            <h1>About page</h1>
            <p>{author}</p>
            {version}
    </div>;
}

export default About;
```

##### Disclaimer.js

Este también es un componente que, en este caso, se define como arrow function.

__.2. Fichero Disclaimer.js.__

```JavaScript
const Disclaimer = () => <div>Use this code at your own risk</div>;

export default Disclaimer;
```

Una vez importado, su uso sería muy simple. En el caso de About, si se omite la propiedad versión, aplicará la propiedad por defecto definida en defaultProps.

```JavaScript
<About author="Pello" />
<Disclaimer />
```

## Desectructuración de properties

La desectructuración de objetos y arrays es una capacidad muy interesante que ha aportado JavaScript en sus últimas actualizaciones. La desectructuración se ha revelado como una gran ventaja en las aplicaciones React a la hora de recoger las propiedades de los componentes.
Esto permite que las properties que se le pasan a un componente se puedan separar convenientemente en la definición del mismo.

##### AboutDes.js

Las properties que recibe el componente AboutDes, en lugar de ser simplemente el objeto props, se desectructura en {author, versión}, de tal manera que dentro de la función se puede usar directamente author o version sin necesidad de poner props.author.
Esto trae además otra ventaja añadida: se pueden asignar valores por defecto a las properties. 

__.3. Fichero AboutDes.js.__

```JavaScript
import React from 'react';

function AboutDes ({author = "None", version = "1.0.0"}) {
	let versionP = <p>version {version}</p>;
	return <div>
		<h1>About page</h1>
		<p>{author}</p>
		{versionP}
	</div>;
}

export default AboutDes;
```

Esta desectructuración se hace más obvia en TypeScript, aunque en un componente JavaScript, dentro de render se puede hacer la misma desectructuración:

```JavaScript
{author = "None", version = "1.0.0"} = this.props;
```

##### Customer.js

En este caso, se aplica la desectructuración y además el operador …, que permite agrupar todas las properties que siguen a name dentro de la variable other.

__.4. Fichero Customer.js.__

```JavaScript
import React from 'react';

function Customer ({name, ...other}) {
	return <div className="Customer">
		<ul>
			<li><b>Id: </b>{other.id}</li>
			<li><b>Name: </b>{name}</li>
			<li><b>Email: </b>{other.email}</li>
		</ul>
	</div>;
}

export default Customer;
```

##### Uso

El uso de la desectructuración tiene también una gran ventaja en el momento de utilizar los componentes, ya que se puede aplicar la expansión que se ve a continuación:

```JavaScript
<AboutDes author="Pello" />
<Customer  name="John Doe" id="666" email="jdoe@nobody.org" />
```

## Expandir atributos

La expansión es también un uso que se puede hacer de las capacidades de JavaScript del operador …, que expande las propiedades de un objeto. Es un mecanismo que en el caso de React puede ahorrar bastante código repetitivo a la hora de pasar properties a un componente.

##### Customers.js

En el caso de Customer, si las properties que espera son name, id y email, se le puede pasar un objeto que contenga exactamente las mismas propiedades y hacer simplemente {...customer}.

__.5. Fichero Customers.js.__

```JavaScript
import Customer from "../destructuring_props/Customer";

const Customers = ({data}) => {
  return <div>
      {
        data.map( (customer, i) => 
            <Customer key={i} {...customer} />
        )
      }
    </div>;
}

export default Customers;
```

##### Uso

En el siguiente ejemplo de uso se puede apreciar cómo se definen unos datos de ejemplo y la diferencia entre no usar y usar la expansión.

```JavaScript
const customers = [
	{id: 2, name: "Guy", email: "incognito@none.org"},
	{id: 666, name: "Evil", email: "evl@hell.hl"}
];
…
<Customer name="John Doe" id="666" email="jdoe@nobody.org"/>
<Customer {...customers[0]} />
```

## Fusionar properties desectructuradas con otros valores

Esta práctica consiste en una mezcla de las dos anteriores. A veces puede ser interesante desectructurar properties, pero para luego asignarle nuevos valores. En el siguiente ejemplo se muestra cómo definir un componente Dialog cuyas properties se desectructuran para poder modificar uno de ellos, que será el que se asigne a className. Ese mecanismo permitirá que el mismo componente Dialog pueda usarse con estilos diferenciados.

##### Dialog.css

Esta sería una hoja de estilos convencional:

__.6. Fichero Dialog.css.__

```JavaScript
.default {
	border: 1px solid lightgray;
	padding: 0.5em;
	border-radius: 0.2em;
	margin: 0.1em auto;
	width: 80%;
}

.warning {
	color: red;
}
```

##### Dialog.js

Y este sería un componente para mostrar un Dialog que aplicará la hoja de estilos anterior. Como se puede ver, se desectructuran las properties, pero para poder dar un tratamiento distinto a className.

__.7. Fichero Dialog.js.__

```JavaScript
import "./Dialog.css";

function Dialog ({className = "",...dialog}) {
    const classes = ["default", className].join(" ");

    return (
      <div className={classes}>
        <h3>{dialog.title}</h3>
        <p>{dialog.content}</p>
      </div>
    );
}

export default Dialog;
```

##### Uso

Gracias a la aplicación de este patrón, si no se pasa una propiedad específica de className, se asignará un estilo por defecto, mientras que, si se le pasa el componente, tendrá un estilo distinto. En cualquier caso, se utiliza un único componente.

```JavaScript
<Dialog title="Default" content="This dialog has default content" />
<Dialog className="warning" title="Warning!!!" content="Be careful" />
```

## Renderizado condicional

Parte del siguiente código ha sido presentado en el capítulo sobre JSX, aquí se muestra agrupado en componentes aislados. En ocasiones se necesita renderizar contenido o no según determinadas condiciones. Los patrones habituales son:
-	Muestra un contenido si se cumple una condición: if.
-	Muestra un contenido si no se cumple una condición: unless.
-	Muestra un contenido u otro según una condición: if-else.

Los siguientes ejemplos son componentes que muestran información de número de registros según si un conjunto de datos está vacío o no. Cada uno aplica el if, unless e if-else respectivamente.

##### Footer1.js

Solo muestra el contenido del componente si se cumple una condición:

__.8. Fichero Footer1.js.__

```JavaScript
const Footer1 = ({data}) => {
  return data && <div>{data.length} Records</div>;
}

export default Footer1;
```

##### Footer2.js

Solo se muestra el contenido del componente si NO se cumple una condición. Sería como una cláusula unless:

__.9. Fichero Footer2.js.__

```JavaScript
const Footer2 = ({data}) => {
  return  (data == null || <div>No data</div>);
}

export default Footer2;
```

##### Footer3.js

Este componente muestra cómo mostrar un contenido u otro con una estructura tipo if-else:

__.10. Fichero Footer3.js.__

```JavaScript
const Footer3 = ({data}) => {
  return data == null ? (
    <div>No Records</div>
  ) : (
    <div>{data.length} Records</div>
  );
}

export default Footer3;
```

##### index.js

Se pueden agrupar todos los export en un fichero index.js:

__.11. Fichero index.js.__

```JavaScript
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

export { Footer1, Footer2, Footer3 };
```

##### Uso

Y luego importar y usar así. Según el array de datos que se le pase a cada uno, mostrará un comportamiento distinto.

```JavaScript
import { Footer1, Footer2, Footer3 } from "./conditional_rendering";
…
<Footer1 data={customers} />
<Footer1 data={[]} />
<Footer1 data={null} />
<hr />
<Customers data={customers} />
<Footer2 data={customers} />
<Footer2 data={[]} />
<Footer2 data={null} />
<hr />
<Footer3 data={customers} />
<Footer3 data={[]} />
<Footer3 data={null} />
```

## Children types

Un componente puede estar compuesto de más componentes. Un componente puede ser algo tan simple como un bloque div o una etiqueta cualquiera, lo cual sería un componente mínimo.
Los componentes son subcomponentes dentro de un componente; pueden ser desde cadenas, otros componentes o incluso arrays de ambos.

##### RenderChildren.js

__.12. Fichero RenderChildren.js.__

```JavaScript
const RenderChildren = ({words}) => {
  return (
    <div>
      {<h3>String type render</h3>}
      <h4>{[<b>This</b>, " is ", <i>Good</i>]}</h4>
      <h5>{[...words]}</h5>
    </div>
  );
}

export default RenderChildren;
```

##### Uso

El siguiente uso del componente RenderChildren le pasa un array de children o hijos a través de las properties words.

```JavaScript
<RenderChildren words={["This", " is ", <b>Cool</b>]}/>
```

## Array as children

Este patrón ya ha sido mostrado ampliamente a lo largo del libro y es uno de los usos fundamentales de React. Es frecuente que se necesite mostrar varios componentes basados en un conjunto de datos, como una lista, las filas de una tabla, etc.
Los escenarios de ejemplo pueden ser desde los post de un blog, los comentarios de un artículo, etc. Obviamente no se crea un componente a mano, sino que se utiliza el método map sobre un array de datos o componentes y se generan.

##### RenderArrays.js

El siguiente ejemplo muestra dos usos de este patrón:
-	El primero genera un bloque div con el nombre de cada cliente.
-	El segundo simplemente renderiza dos datos sacados de un array de dos elementos: el número de clientes y la palabra customers.

__.13. Fichero RenderArray.js.__

```JavaScript
const RenderArrays = ({customers}) =>  {
    return <div>
        { 
            customers.map( (customer, i) => 
                <div key={i}>{customer.name}</div>
            )
        }
        <div>
            {[customers.length, " customers"].map((text, i) => <span key={i}>{text}</span>)}
        </div>
    </div>;
}

export default RenderArrays;
```

##### Uso

En el uso no tendríamos más que pasarle el array de datos:

```JavaScript
<RenderArrays customers={customers}/>
```

## Render prop function children

Este patrón se usa para la renderización de componentes hijo, utilizando funciones que relacionan un elemento padre con un hijo. Este estilo de relación también se implementa con el patrón High-Order Component, que se muestra más adelante.

##### InputField.js

Este componente muestra una caja de texto con un label o etiqueta por delante. En este caso el componente padre es Input y el hijo sería Label. Label reutiliza un dato pasado a Input para pasarlo a mayúscula. 

__.14. Fichero InputField.js.__

```JavaScript
const InputField = (props) => {
    const Label = ({ field }) => <label htmlFor={field}>{field.toUpperCase()}</label>;
    const Input = ({ field, value, children }) => <div>{children}<input type="text" id={field} name={field} defaultValue={value} /></div>;

    return <div>
        <Input {...props} >
          <Label field={props.name} />
        </Input>
      </div>;
  }

export default InputField;
```

Lo crucial es que Input hace uso de un hijo a través de la variable children, eso permite que ese children sea sustituible por cualquier cosa.
Por lo tanto, podría ser un subcomponente intercambiable.

```JavaScript
<div>
	<Input {...this.props} >
		<div>{this.props.name}</div>
	</Input>
</div>
```

##### Uso

En este uso, InputField contiene el Input, que, a su vez, contiene el Label. 

```JavaScript
<InputField name="email" value="any@mail.com" />
```

La ventaja obvia es que podría parametrizarse para permitir cualquier componente.
## Children pass-through

Este patrón muestra el uso de React.Children.only, lo cual permite que un componente renderice sus componentes hijos sin necesidad de agruparlos en una etiqueta o elemento raíz.

##### Header.js

Este podría ser un simple componente que agrupa sus componentes hijo dentro de un bloque div con estilo.

__.15. Fichero Header.js.__

```JavaScript
const Header = ({children}) => {
    return <div style={{color: "green"}}>
            {children}
        </div>;
}

export default Header;
```

##### HeaderPassThrough.js

Y este sería un componente similar que lo único que hace es volcar todo lo que tiene como componentes hijo.
__.16. Fichero HeaderPassThrough.js.__


```JavaScript
import React from "react";

const HeaderPassThrough = ({children}) => {
  return React.Children.only(children);
}

export default HeaderPassThrough;
```

##### Uso

Para ver la diferencia, se muestra cómo usar el componente Header normal y luego el componente que hace el paso de hijos o pass-through. En este caso, se debe añadir un bloque div para no incumplir la norma básica de React de que un componente debe renderizar algo que contenga una raíz, que en este caso será un div.

```JavaScript
<Header>
	<About author="Pello"/>
	<Disclaimer/>
</Header>
...
<HeaderPassThrough>
	<div>
		<About author="Pello"/>
		<Disclaimer/>
	</div>
</HeaderPassThrough>
```

Si dentro de HeaderPassThrough solo hubiera un componente, no haría falta ese div.

```JavaScript
<HeaderPassThrough>
	<Disclaimer />
</HeaderPassThrough>
```

## Switch de eventos

Es frecuente que un componente, por ejemplo un elemento de formulario, tenga asociados varios eventos. En React lo habitual es asociar cada uno de esos eventos a un método del componente.
Este patrón permite agrupar todos esos métodos en uno utilizando una estructura switch/case para distinguir el tipo de evento  

##### Input.js

Este sería un componente que contiene una caja de texto, al que se le asocia el método handleEvent para los eventos de foco, pérdida de foco (blur) y cambio de contenido.

__.17. Fichero Input.js.__

```JavaScript
import { useState } from "react";

const Input = ({name}) => {
    const [logEvent, setLogEvent] = useState("")

    const handleEvent = (event) => {
      switch (event.type) {
        case "focus":
          setLogEvent("Focus event");
          break;
        case "blur":
          setLogEvent("Blur event");
          break;
        case "change":
          setLogEvent("Change event " + event.target.value);
          break;
        default:
          setLogEvent({ logEvent: event.type });
          break;
      }
    }

    return <div> 
        <input type="text" name={name} 
            onFocus={handleEvent}
            onChange={handleEvent}
            onBlur={handleEvent}
        />
        <div>{logEvent}</div>
    </div>;
  }

export default Input;
```

Este patrón evita tener un método por cada evento, aunque también es cierto que los switch/case no cuentan con muchos adeptos. De hecho, es probable que estos prefieran un pequeño método por cada evento, en lugar de un método enorme con una estructura switch/case.

##### Uso

Externamente el uso no tendría nada en especial, ya que el switch/case es algo interno.

```JavaScript
<Input name="email" />
```
## State hoisting

Este patrón podría traducirse como la elevación de estado, permite utilizar componentes sin estado y dejar la gestión del mismo a otros.

##### LoginForm.js

Este sería un componente padre cuyo estado es modificado según lo que ocurra en los componentes hijo. La relación se establece a través de callbacks que se pasan a los componentes sin estado.

__.18. Fichero LoginForm.js.__

```JavaScript
import {useState} from "react";
import Login from "./Login";

const LoginForm = () => { 
  const [login, setLogin] = useState('');
  const [password, setPassword ] = useState('');

  const onChange1 = (event) => {
    setLogin(event.target.value);
  }

  const onChange2 = (value) => {
    setPassword(value);
  }

  return <div>
      <div>{`Login: ${login}`}</div>
      <div>{`Password: ${password}`}</div>
      <Login 
          type1="text" 
          type2="password"
          onChange1={onChange1}
          onChange2={onChange2}
      />
    </div>;
}

export default LoginForm;
```

##### Login.js

Este componente contiene las cajas de texto. Como se puede ver, no tiene estado y su valor no se guarda ni se asigna al propio campo. En su lugar se utiliza el callback de onchange para elevar el valor al estado del componente padre.

__.19. Fichero Login.js.__

```JavaScript
const Login = ({type1, type2, onChange1, onChange2}) => {
return <div>
    Login: <input type={type1} onChange={onChange1} />
    Password: <input type={type2} onChange={e => onChange2(e.target.value)} />
</div>;
}

export default Login;
```

Este componente Login podría desarrollarse también como un Function Component.

##### Uso

Externamente el uso no tampoco tendría nada en especial:

```JavaScript
<h3>Login Form</h3>
<LoginForm /> 
```
## Controlled input

Este también es un patrón que se mostró anteriormente, en el apartado de formularios. Básicamente asocia el valor de un campo de formulario al estado. Cualquier cambio de ese valor modifica el estado, por lo que ambos quedan asociados.
Es una manera de controlar el valor que se almacena en el campo. Se puede mostrar el valor directamente o se podría filtrar de manera condicional.

##### ControlledInput.js

Este componente representa una caja de texto de formulario. Para controlar lo que se escribe en él, se asocia un evento onChange. El valor del campo consiste en lo que tenga el estado.

__.20. Fichero ControlledInput.js.__

```JavaScript
import { useState } from "react";

const ControlledInput = ({name}) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }
    return <input type1="text" value={value} onChange={onChange} name={name} />;
}

export default ControlledInput;
```

##### Uso

El uso no tendría nada de particular desde fuera:

```JavaScript
<ControlledInput name="email" /> 
```

## Componente proxy

Proxy es un patrón bien conocido desde el libro del GoF o Gang of Four. Se trataba de controlar el acceso a una clase a través de otra. En el caso de React, el proxy se hace de manera implícita en infinidad de ocasiones. Basta con que, en lugar de utilizar un HTML directamente, se presente dentro de un componente. Gracias a eso, se obtiene un HTML más controlado y con funcionalidades extra.

##### Password.js

Este componente no sería más que una caja de texto tipo password.

__.21. Fichero Password.js.__

```JavaScript
import React from 'react';

function Password (props) {
	return <input type="password"
		id={props.id}
		name={props.id}
		onChange={props.onChange.bind (this)}
	/>;
}

export default Password;
```

##### Button.js

Este componente tipo Function Component encapsularía un botón.

__.22. Fichero Button.js.__

```JavaScript
import React from 'react';

const Button = ({action, text}) => <button onClick={action}>{text}</button>;
export default Button;
```

##### Uso

No tendría mucho misterio, aquí se muestran unas pruebas de concepto:

```JavaScript
<Password id="passwd" onChange={(e) => alert(e.target.value)} />
<Button action={() => alert('Clicked')} text="Click me!" />
```

## Componente de estilos

Se trata de reutilizar un mismo componente que encapsula la gestión de los estilos. Esto permite crear variantes del mismo componente centralizando la gestión de estilos en un componente base.

##### Dialog.css

Los estilos definen un estilo general y unas clases específicas que se aplicarán a distintas variantes del mismo componente.

__.23. Fichero Dialog.css.__

```JavaScript
.dialog {
	border: 1px solid lightgray;
	background-color: lightgray;
	padding: 0.5em;
	border-radius: 0.4em;
	margin: 0.1em auto;
	width: 80%;
}

.warning {
	color: yellow;
}

.info {
	color: lightseagreen;
}

.error {
	color: orangered;
}
```

##### CommonDialog.js

Este componente, similar al definido antes, muestra un bloque div cuyo estilo es configurable a través de las properties. La propiedad className podrá ser configurada según las clases definidas en el fichero de estilos anterior.

__.24. Fichero CommonDialog.js.__

```JavaScript
import "./Dialog.css";

const CommonDialog = ({ dialogClass, content, ...props }) => {
  return  <div className={`dialog ${dialogClass}`} {...props} >
      {content}
    </div>;
}

export default CommonDialog;
```

##### Uso

Al crear un componente que se ocupa de toda la gestión de estilos, se pueden crear componentes que lo reutilicen de distinta manera, cambiando simplemente el parámetro de estilo. 
En este caso, se crea un Function Component que reutiliza CommonDialog:

```JavaScript
const ErrorDialog = ({content, props}) => <CommonDialog dialogClass="error" content={content} {...props} />;
...
<CommonDialog dialogClass="info" content="Info dialog txt" />
<CommonDialog dialogClass="warning" content="Warning dialog txt" /> 
<ErrorDialog content="Error dialog txt" />
```

## Componente de disposición o layout

Se trata de un componente que organiza la disposición de otros componentes. Puede resultar útil como componente de la aplicación o componente reutilizable para formularios, campos de formulario, tablas.

##### Form.js

Este componente es un formulario que simplemente organiza la disposición de dos componentes. Los subcomponentes se pasarán a través de properties. Se podría hacer lo mismo usando componentes hijos.
En cualquier caso, los elementos Input y Button son parametrizados y el componente Form es reutilizable.

__.25 Fichero Form.js.__

```JavaScript
const Form = ({input, button}) => {
    return <form>
        <div>{input}</div>
        <div>{button}</div>
    </form>;
}

export default Form;
```

##### Uso

A través de las properties Input y Button, se le pasan directamente dos componentes. El componente Form los organiza poniendo cada uno en un bloque div. Por eso se trata de un componente que simplemente organiza la disposición.

```JavaScript
<Form
	input={<Password id="passwd" onChange={(e) => alert ("Works!")}/>}
	button={<Button action={() => alert ("Clicked")} text="Click me!"/>}
/>
```

## Componente container

Una de las operaciones más comunes en aplicaciones React es cargar datos a través de una llamada a la red, a una API, un storage o cualquier origen de datos y mostrarlos generando una lista de componentes.
Un patrón común separa estas dos tareas en componentes distintos:
-	Un componente llamado Container se encarga de recuperar los datos, típicamente en un método componentDidMount.
-	Otro componente es el que se encarga de mostrar los datos.

##### CustomersContainer.js

Este componente es el que se encarga de recuperar los datos. Por simplificar el ejemplo, sencillamente se cargan de un fichero. En el método render hace uso del componente para mostrar los datos, que se encarga de visualizarlos.

__.26. Fichero CustomersContainer.js.__

```JavaScript
import { useState } from "react";
import Customers from "../spreading_props/Customers";
import initialCustomers from "../customers.json";

const CustomersContainer  = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  return (
    <div>
      <h3>Customers</h3>
      <Customers data={customers} />
    </div>
  );
}

export default CustomersContainer;
```

##### Uso

En este caso, externamente no hay nada de particular. Aplicando otros patrones se podrían asignar distintos componentes para la visualización, tal y como se verá en el patrón High-Order Component.

```JavaScript
<CustomersContainer /> 
```

## HOC: Higher-order Component

Este es sin duda uno de los patrones más típicos en aplicaciones React. Básicamente, consiste en que un componente se define como una función que recibe otro componente como parámetro. De esa manera, se puede reutilizar la lógica del componente variándolo según lo que se le pase como parámetro. 

##### Composed.js

Este componente llamado Composed se define como arrow function. Recibe como parámetro un componente (Component), el cual se muestra dentro de render.

__.27. Fichero Composed.js.__

```JavaScript
import { useState } from "react";
import customers from "../customers.json";

const Composed = (Component) => {
  const [data, setDate] = useState(customers)
  return (props) => <Component data={data} {...props} />;
};

export default Composed;
```

##### Uso

Como se puede ver, se crea un componente parametrizado. Utilizando una llamada al componente Composed como si fuera una función, se le pasa el subcomponente deseado, en este caso Customers. Customers generaba una lista. Se le podría pasar otro componente que, por ejemplo, generase una tabla. La ventaja es que todo el código de Composed sería común y solo cambiaríamos la forma de presentarlo.

```JavaScript
const CustomersHOC = Composed(Customers);
...
<CustomersHOC /> 
```

## Event Bus

Se trata de utilizar eventos para mandar mensajes de un componente a otro. En React es frecuente que los componentes se dividan en subcomponentes, creando estructuras jerárquicas que a veces pueden llegar a ser complejas. Si se necesita que algo que ocurre en un componente hijo llegue arriba en la jerarquía o bien a otro componente, pueden utilizarse callbacks que se pasan a través de properties. El problema por cada componente que hay que atravesar es que habría que pasar ese callback una y otra vez.
La solución de Event Bus propone crear un objeto que sea capaz de emitir eventos y que sea compartido por todos los componentes que lo deseen. De esa manera, los componentes pueden generar eventos diferentes, aquellos componentes que lo necesiten se pueden suscribir a ellos.
En el siguiente ejemplo, se define un bus de eventos, un componente que genera eventos a través de ese bus y un receptor de los mismos.

##### Bus.js

Se podría definir como una clase, pero bastaría con lo siguiente:

__.28. Fichero Bus.js.__

```JavaScript
import events from "events";

const bus = new events.EventEmitter();
export default bus;
```

Se trata simplemente de un objeto para emitir eventos que se exporta directamente.

##### Emitter.js

Este es el componente que genera un evento llamado EVENT_HAPPENED cuando se pulsa un botón. Además, pasa como parámetro un mensaje.

__.29. Fichero Emitter.js.__

```JavaScript
import bus from "./Bus";

const Emitter= () => {
    const sayHello = ()=>  {
      console.log("Event emitted");
      bus.emit("EVENT_HAPPENED", "It Works!");
    }
    return <div>
        <button onClick={sayHello}>Say Hello</button>
      </div>;
  }

export default Emitter;
```

##### Receiver.js

Este sería el componente que a través del bus se suscribe a los eventos tipo EVENT_HAPPENED y puede reaccionar a eventos que dispara otro componente cualquiera, en este caso Emitter.

__.30. Fichero Receiver.js.__

```JavaScript
import { useState, useEffect } from "react";
import bus from "./Bus";

const Receiver  = () => {  
    const [message, setMessage] = useState('');

    const onEventReceived = (receivedMessage) => {
      console.log("Event received", receivedMessage);
      setMessage(receivedMessage);
    } 

    useEffect(() => {
      bus.on("EVENT_HAPPENED", onEventReceived);
    })

    return (
      <div>{message && <div>Event Received. Message: {message}</div>}</div>
    );
  }


export default Receiver;
```

##### Uso

El uso no tendría nada particular. Como se ve, los componentes no tienen porqué estar relacionados para nada.

```JavaScript
<Emitter />
<Receiver />
```

Esta solución evita que se tengan que pasar callbacks de un componente a otro a través de properties y facilita enormemente la interacción entre componentes que no están directamente relacionados. Además, su uso es muy sencillo y puede testarse fácilmente.
En este caso, se ha usado un generador de eventos con la librería estándar, pero pueden usarse otras librerías como específicas para aplicar este patrón como EventEmitter3.

