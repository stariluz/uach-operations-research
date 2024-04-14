# Método M
### Solución artificial inicial
Se inicia con la PL en forma de ecuación. Si la ecuación $i$ no tiene holgura, se agrega una variable artificial $P_i$.

##### Regla de penalización para variables artificiales
Dado M, un valor positivo suficientemente grande (matemáticamente ($M \to \infty$)).

Dadas las restriciones:
1. Identificamos las restricciones que poseen holgura.
2. Identificamos las restricciones que no poseen holgura, a estás les agregaremos variables artificiales.
3. Seleccionamos una M lo suficientemente grande para penalizar nuestra función objetivo.
4. Las variables básicas para el primer punto son las holguras.
5. Tenemos que nivelar la función Z por que es incongruente.
    Para esto indicaremos las variables artificiales en terminos de las variables (y superávits), y sustituiremos sus valores en la ecuación Z.
6. Una vez que obtenemos la nueva ecuación de Z, la colocamos en su lugar en la tabla.
7. Realizamos el método SIMPLEX.

$Min Z=4x_1+x_2$

- Restricciones
  $3x_1+x_2 = 3$

  $4x_1+3x_2 \geq 6$

  $x_1+2x_2 \leq 4$

  $x_1,x_2 \geq 0$


- Definición de ecuaciones
  $Z - 4x_1 - x_2 - MR_1 - MR_2 = 0$

  $3x_1 + x_2 + R_1 = 3$

  $4x_1 + 3x_2 + S_1 + R_2 = 6$

  $x_1 + 2x_2 + s_1 = 4$

  $x_1, x_2 \geq 0$

$M=100$

$Z - 4x_1 - x_2 - 100R_1 - 100R_2 = 0$

### Comprobación de la función Z.
Considerando que las holguras son R_1, R_2 y s_1, estás son nuestras variables de entrada.
| $V_B$ | $Z$ | $x_1$ | $x_2$ | $S_1$ | $s_1$ | $R_1 | $R_2$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ---- | ----- | ---------- |
| $Z$   | $1$ | $-4$  | $-1$  | $0$   | $0$   | $-1$ | $-1$  | $0$        |
| $s_1$ | $0$ | $1$   | $2$   | $0$   | $1$   | $0$  | $0$   | $4$        |
| $R_1$ | $0$ | $3$   | $1$   | $0$   | $0$   | $1$  | $0$   | $3$        |
| $R_2$ | $0$ | $4$   | $3$   | $1$   | $0$   | $0$  | $1$   | $6$        |


$Z = 0 \neq  4(0) + (0) + 100(3) + 100(4) = 900$

### Corregir la ecuación Z

De $3x_1 + x_2 + R_1 = 3$ :

$R_1 = - 3x_1 - x_2 + 3$


De $4x_1 + 3x_2 + S_1 + R_2 = 6$

$R_2 = - 4x_1 - 3x_2 - S_1 + 6$

Sustituyendo en $Z - 4x_1 - x_2 - 100R_1 - 100R_2 = 0$

$Z - 4x_1 - x_2 - 100(-3x_1 - x_2 + 3) - 100(- 4x_1 - 3x_2 - S_1 + 6) = 0$

$Z - 4x_1 - x_2 +300x_1 + 100x_2 - 300 + 400x_1 + 300x_2 + 100S_1 - 600 = 0$

$Z + 696x_1 + 399x_2  + 100S_1 = 900$


| $V_B$ | $Z$ | $x_1$ | $x_2$ | $S_1$  | $s_1$ | $R_1 | $R_2$ | $Solución$ |
| ----- | --- | ----- | ----- | ------ | ----- | ---- | ----- | ---------- |
| $Z$   | $1$ | $696$ | $399$ | $-100$ | $0$   | $0$  | $0$   | $900$      |
| $s_1$ | $0$ | $1$   | $2$   | $0$    | $1$   | $0$  | $0$   | $4$        |
| $R_1$ | $0$ | $3$   | $1$   | $0$    | $0$   | $1$  | $0$   | $3$        |
| $R_2$ | $0$ | $4$   | $3$   | $1$    | $0$   | $0$  | $1$   | $6$        |


## Primera iteración

### Seleccionar variable de entrada ($V_E$)

> ¿Qué variable de mi función $Z$ afecta más a mi modelo?

El modelo busca minimizar, para obtener la ecuación de Z, pasamos la función al lado izquierdo, por esto la variable que afecta más es la más positiva.

$V_E=x_1$

| $V_B$ | Columna $V_E$ | Columna $Solución$ | Relación mínima           | Válida |
| ----- | ------------- | ------------------ | ------------------------- | ------ |
| $s_1$ | $1$           | $4$                | $\frac{4}{1}=4$           | Sí     |
| $R_1$ | $3$           | $3$                | ==$\frac{3}{3}=1$==       | Sí     |
| $R_2$ | $4$           | $6$                | $\frac{6}{4}=\frac{3}{2}$ | Sí     |

$R_1$ es nuestra variable pivote ($V_P$)

### Actualizar la fila de la variable pivote ($V_P$)

$M_{V_P,V_E}=3$.

> $M_{V_P},j=\frac{M_{V_P,j}}{M_{V_P,V_E}}$ 

$R_1 \to x_1$

| $V_B$ | $Z$ | $x_1$           | $x_2$         | $S_1$ | $s_1$ | $R_1          | $R_2$ | $Solución$      |
| ----- | --- | --------------- | ------------- | ----- | ----- | ------------- | ----- | --------------- |
| $x_1$ | $0$ | $\frac{3}{3}=1$ | $\frac{1}{3}$ | $0$   | $0$   | $\frac{1}{3}$ | $0$   | $\frac{3}{3}=1$ |

| $V_B$ | $Z$ | $x_1$ | $x_2$         | $S_1$  | $s_1$ | $R_1          | $R_2$ | $Solución$ |
| ----- | --- | ----- | ------------- | ------ | ----- | ------------- | ----- | ---------- |
| $Z$   | $1$ | $696$ | $399$         | $-100$ | $0$   | $0$           | $0$   | $900$      |
| $s_1$ | $0$ | $1$   | $2$           | $0$    | $1$   | $0$           | $0$   | $4$        |
| $x_1$ | $0$ | $1$   | $\frac{1}{3}$ | $0$    | $0$   | $\frac{1}{3}$ | $0$   | $1$        |
| $R_2$ | $0$ | $4$   | $3$           | $1$    | $0$   | $0$           | $1$   | $6$        |

### Actualizar las demás filas respecto a la fila pivote
> Para todas las filas $M_i$: <br>
> $M_i = M_i -  M_{i,V_E} \cdot M_{V_P}$


#### Actualizar Z

| $V_B$            | $Z$ | $x_1$     | $x_2$         | $S_1$  | $s_1$ | $R_1          | $R_2$ | $Solución$ |
| ---------------- | --- | --------- | ------------- | ------ | ----- | ------------- | ----- | ---------- |
| $Z$              | $1$ | ==$696$== | $399$         | $-100$ | $0$   | $0$           | $0$   | $900$      |
| $x_1$            | $0$ | $1$       | $\frac{1}{3}$ | $0$    | $0$   | $\frac{1}{3}$ | $0$   | $1$        |
| $696x_1$         | $0$ | $696$     | $232$         | $0$    | $0$   | $232$         | $0$   | $696$      |
| $Z = Z - 696x_1$ | $1$ | $0$       | $167$         | $-100$ | $0$   | $-232$        | $0$   | $204$      |

#### Actualizar s_1

| $V_B$               | $Z$ | $x_1$   | $x_2$         | $S_1$ | $s_1$ | $R_1           | $R_2$ | $Solución$ |
| ------------------- | --- | ------- | ------------- | ----- | ----- | -------------- | ----- | ---------- |
| $s_1$               | $0$ | ==$1$== | $2$           | $0$   | $1$   | $0$            | $0$   | $4$        |
| $x_1$               | $0$ | $1$     | $\frac{1}{3}$ | $0$   | $0$   | $\frac{1}{3}$  | $0$   | $1$        |
| $1x_1$              | $0$ | $1$     | $\frac{1}{3}$ | $0$   | $0$   | $\frac{1}{3}$  | $0$   | $1$        |
| $s_1 = s_1 - 1x_1 $ | $0$ | $0$     | $\frac{5}{3}$ | $0$   | $1$   | $\frac{-1}{3}$ | $0$   | $3$        |

#### Actualizar R_2

| $V_B$               | $Z$ | $x_1$ | $x_2$         | $S_1$ | $s_1$ | $R_1           | $R_2$ | $Solución$ |
| ------------------- | --- | ----- | ------------- | ----- | ----- | -------------- | ----- | ---------- |
| $R_2$               | $0$ | $4$   | $3$           | $1$   | $0$   | $0$            | $1$   | $6$        |
| $x_1$               | $0$ | $1$   | $\frac{1}{3}$ | $0$   | $0$   | $\frac{1}{3}$  | $0$   | $1$        |
| $4x_1$              | $0$ | $4$   | $\frac{4}{3}$ | $0$   | $0$   | $\frac{4}{3}$  | $0$   | $4$        |
| $R_2 = R_2 - 4x_1 $ | $0$ | $0$   | $\frac{5}{3}$ | $0$   | $0$   | $\frac{-4}{3}$ | $1$   | $2$        |


### Actualizar tabla con las filas actualizadas

| $V_B$ | $Z$ | $x_1$ | $x_2$         | $S_1$  | $s_1$ | $R_1           | $R_2$ | $Solución$ |
| ----- | --- | ----- | ------------- | ------ | ----- | -------------- | ----- | ---------- |
| $Z$   | $1$ | $0$   | $167$         | $-100$ | $0$   | $-232$         | $0$   | $204$      |
| $s_1$ | $0$ | $0$   | $\frac{5}{3}$ | $0$    | $1$   | $\frac{-1}{3}$ | $0$   | $3$        |
| $x_1$ | $0$ | $1$   | $\frac{1}{3}$ | $0$    | $0$   | $\frac{1}{3}$  | $0$   | $1$        |
| $R_2$ | $0$ | $0$   | $\frac{5}{3}$ | $0$    | $0$   | $\frac{-4}{3}$ | $1$   | $2$        |


Esté $PE$ es $B$.


## Segunda iteración

### Seleccionar variable de entrada ($V_E$)

$V_E=x_2$

| $V_B$ | Columna $V_E$ | Columna $Solución$ | Relación mínima                         | Válida |
| ----- | ------------- | ------------------ | --------------------------------------- | ------ |
| $s_1$ | $\frac{5}{3}$ | $3$                | $\frac{3}{\frac{5}{3}}=\frac{9}{5}$     | Sí     |
| $x_1$ | $\frac{1}{3}$ | $1$                | $\frac{1}{\frac{1}{3}}=3$               | Sí     |
| $R_2$ | $\frac{5}{3}$ | $2$                | ==$\frac{2}{\frac{5}{3}}=\frac{6}{5}$== | Sí     |

$R_2$ es nuestra variable pivote ($V_P$)

### Actualizar la fila de la variable pivote ($V_P$)

$M_{V_P,V_E}=\frac{5}{3}$.

> $M_{V_P},j=\frac{M_{V_P,j}}{M_{V_P,V_E}}$ 

$R_2 \to x_2$


| $V_B$ | $Z$ | $x_1$ | $x_2$ | $S_1$ | $s_1$ | $R_1                                                           | $R_2$         | $Solución$    |
| ----- | --- | ----- | ----- | ----- | ----- | -------------------------------------------------------------- | ------------- | ------------- |
| $x_2$ | $0$ | $0$   | $1$   | $0$   | $0$   | $\frac{\frac{-4}{3}}{\frac{5}{3}}=\frac{-12}{15}=\frac{-4}{5}$ | $\frac{3}{5}$ | $\frac{6}{5}$ |

| $V_B$ | $Z$ | $x_1$ | $x_2$         | $S_1$  | $s_1$ | $R_1           | $R_2$         | $Solución$    |
| ----- | --- | ----- | ------------- | ------ | ----- | -------------- | ------------- | ------------- |
| $Z$   | $1$ | $0$   | $167$         | $-100$ | $0$   | $-232$         | $0$           | $204$         |
| $s_1$ | $0$ | $0$   | $\frac{5}{3}$ | $0$    | $1$   | $\frac{-1}{3}$ | $0$           | $3$           |
| $x_1$ | $0$ | $1$   | $\frac{1}{3}$ | $0$    | $0$   | $\frac{1}{3}$  | $0$           | $1$           |
| $x_2$ | $0$ | $0$   | $1$           | $0$    | $0$   | $\frac{-4}{5}$ | $\frac{3}{5}$ | $\frac{6}{5}$ |

#### Actualizar Z

| $V_B$            | $Z$ | $x_1$ | $x_2$     | $S_1$  | $s_1$ | $R_1              | $R_2$            | $Solución$       |
| ---------------- | --- | ----- | --------- | ------ | ----- | ----------------- | ---------------- | ---------------- |
| $Z$              | $1$ | $0$   | ==$167$== | $-100$ | $0$   | $-232$            | $0$              | $204$            |
| $x_2$            | $0$ | $0$   | $1$       | $0$    | $0$   | $\frac{-4}{5}$    | $\frac{3}{5}$    | $\frac{6}{5}$    |
| $167x_2$         | $0$ | $0$   | $167$     | $0$    | $0$   | $\frac{-668}{5}$  | $\frac{501}{5}$  | $\frac{1002}{5}$ |
| $Z = Z - 167x_2$ | $1$ | $0$   | $0$       | $-100$ | $0$   | $\frac{-1828}{5}$ | $-\frac{501}{5}$ | $\frac{18}{5}$   |

#### Actualizar s_1

| $V_B$                        | $Z$ | $x_1$ | $x_2$             | $S_1$ | $s_1$ | $R_1           | $R_2$         | $Solución$    |
| ---------------------------- | --- | ----- | ----------------- | ----- | ----- | -------------- | ------------- | ------------- |
| $s_1$                        | $0$ | $0$   | ==$\frac{5}{3}$== | $0$   | $1$   | $\frac{-1}{3}$ | $0$           | $3$           |
| $x_2$                        | $0$ | $0$   | $1$               | $0$   | $0$   | $\frac{-4}{5}$ | $\frac{3}{5}$ | $\frac{6}{5}$ |
| $\frac{5}{3}x_2$             | $0$ | $0$   | $\frac{5}{3}$     | $0$   | $0$   | $\frac{-4}{3}$ | $1$           | $2$           |
| $s_1 = s_1 - \frac{5}{3}x_2$ | $0$ | $0$   | $0$               | $0$   | $1$   | $\frac{-5}{3}$ | $-1$          | $1$           |

#### Actualizar x_1

| $V_B$                        | $Z$ | $x_1$ | $x_2$             | $S_1$ | $s_1$ | $R_1            | $R_2$          | $Solución$    |
| ---------------------------- | --- | ----- | ----------------- | ----- | ----- | --------------- | -------------- | ------------- |
| $x_1$                        | $0$ | $1$   | ==$\frac{1}{3}$== | $0$   | $0$   | $\frac{1}{3}$   | $0$            | $1$           |
| $x_2$                        | $0$ | $0$   | $1$               | $0$   | $0$   | $\frac{-4}{5}$  | $\frac{3}{5}$  | $\frac{6}{5}$ |
| $\frac{1}{3}x_2$             | $0$ | $0$   | $\frac{1}{3}$     | $0$   | $0$   | $\frac{-4}{15}$ | $\frac{1}{5}$  | $\frac{2}{5}$ |
| $x_1 = x_1 - \frac{1}{3}x_2$ | $0$ | $1$   | $0$               | $0$   | $0$   | $\frac{3}{5}$   | $\frac{-1}{5}$ | $\frac{3}{5}$ |

### Actualizar tabla con las filas actualizadas

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $S_1$  | $s_1$ | $R_1              | $R_2$            | $Solución$     |
| ----- | --- | ----- | ----- | ------ | ----- | ----------------- | ---------------- | -------------- |
| $Z$   | $1$ | $0$   | $0$   | $-100$ | $0$   | $\frac{-1828}{5}$ | $-\frac{501}{5}$ | $\frac{18}{5}$ |
| $s_1$ | $0$ | $0$   | $0$   | $0$    | $1$   | $\frac{-5}{3}$    | $-1$             | $1$            |
| $x_1$ | $0$ | $1$   | $0$   | $0$    | $0$   | $\frac{3}{5}$     | $\frac{-1}{5}$   | $\frac{3}{5}$  |
| $x_2$ | $0$ | $0$   | $1$   | $0$    | $0$   | $\frac{-4}{5}$    | $\frac{3}{5}$    | $\frac{6}{5}$  |


Esté $PE$ es $C$.
