
> La **holgura** es el recurso disponible no utilizado. Se encuentra cuando el signo es $\leq$. Se representa con una $s$. En las ecuaciones se suma.
>
> El **superávit** es el recurso excedente utilizado mayor que el mínimo requerido. Se encuentra cuando el signo es $\geq$. Se representa con una $S$. En las ecuaciones se resta.

> $m=\textrm{numero de ecuaciones}$
>
> $n=\textrm{numero de variables}$
>
> Para calcular la cantidad de puntos de esquina
> $C_m^n=\frac{n!}{m(n-m)!}$

$MaxZ=2x_1+3x_2$

**Sujeto a**
$R_1 \to 2x_1 + x_2 \leq 4$
$R_2 \to x_1 + 2x_2 \leq 5$
$R_3 \to x_1 + x_2 \geq 0$

* Definir ecuaciones

$Z-2x_1-3x_2=0$

$2x_1+x_2+s_1=4$

$x_1+2x_2+s_2=5$

$m=2, n=4$

* Identificar variables básicas ($V_B$) y variables no básicas ($V_{NB}$)

| ($V_B$) | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $Solución$ |
| ------- | --- | ----- | ----- | ----- | ----- | ---------- |
| $Z$     | 1   | -2    | -3    | 0     | 0     | 0          |
| $s_1$   | 0   | 2     | 1     | 1     | 0     | 4          |
| $s_2$   | 0   | 1     | 2     | 0     | 1     | 5          |


1. Nuestra variable de entrada será la variable que más afecta a Z (es un ejercicio de maximizar por lo que es el más negativo), es decir $x_2$, está será nuestra columna pivote.

| ($V_B$) | $C.E.$ | Solución | Relación mín.     |
| ------- | ------ | -------- | ----------------- |
| $s_1$   | 1      | 4        | $\frac{4}{1}=4$   |
| $s_2$   | 2      | 5        | ==$\frac{5}{2}$== |

2. s_2 es la variable con la relación mínima así que será nuestra fila pivote, entonces dividiremos todo entre la intersección de la fila pivote y la columna pivote, es decir 2.

| ($V_B$) | $Z$             | x_1           | x_2             | s_1             | s_2           | Solución      |
| ------- | --------------- | ------------- | --------------- | --------------- | ------------- | ------------- |
| $Z$     | 1               | -2            | -3              | 0               | 0             | 0             |
| $s_1$   | 0               | 2             | 1               | 1               | 0             | 4             |
| $x_2$   | $\frac{0}{2}=0$ | $\frac{1}{2}$ | $\frac{2}{2}=1$ | $\frac{0}{2}=0$ | $\frac{1}{2}$ | $\frac{5}{2}$ |

3. Ahora tenemos que actualizar las filas.

#### Actualizar $Z$

| Variables básicas | Z   | x_1            | x_2      | s_1 | s_2            |
| ----------------- | --- | -------------- | -------- | --- | -------------- |
| $Z$               | $1$ | $-2$           | ==$-3$== | $0$ | $0$            |
| $x_2$             | $0$ | $\frac{1}{2}$  | $1$      | $0$ | $\frac{1}{2}$  | $\frac{5}{2}$   |
| $-3(x_2)$         | $0$ | $\frac{-3}{2}$ | $-3$     | $0$ | $\frac{-3}{2}$ | $\frac{-15}{2}$ |
| $Z=Z-(-3(x_2))$   | $1$ | $\frac{-1}{2}$ | $0$      | $0$ | $\frac{3}{2}$  | $\frac{15}{2}$  |

#### Actualizar $s_1$

| Variables básicas  | Z   | x_1           | x_2     | s_1 | s_2            |
| ------------------ | --- | ------------- | ------- | --- | -------------- |
| $s_1$              | $0$ | $2$           | ==$1$== | $1$ | $0$            | $4$           |
| $x_2$              | $0$ | $\frac{1}{2}$ | $1$     | $0$ | $\frac{1}{2}$  | $\frac{5}{2}$ |
| $1(x_2)$           | $0$ | $\frac{1}{2}$ | $1$     | $0$ | $\frac{1}{2}$  | $\frac{5}{2}$ |
| $s_1=s_1-(1(x_2))$ | $0$ | $\frac{3}{2}$ | $0$     | $1$ | $\frac{-1}{2}$ | $\frac{3}{2}$ |

4. Actualizamos la tabla con las filas actualizadas.

| ($V_B$) | $Z$ | x_1            | x_2 | s_1 | s_2            | Solución       |
| ------- | --- | -------------- | --- | --- | -------------- | -------------- |
| Z       | $1$ | $\frac{-1}{2}$ | $0$ | $0$ | $\frac{3}{2}$  | $\frac{15}{2}$ |
| s_1     | $0$ | $\frac{3}{2}$  | $0$ | $1$ | $\frac{-1}{2}$ | $\frac{3}{2}$  |
| $x_2$   | $0$ | $\frac{1}{2}$  | $1$ | $0$ | $\frac{1}{2}$  | $\frac{5}{2}$  |

## Segunda iteración

1. Nuestra variable de entrada será la variable que más afecta a Z (es un ejercicio de maximizar por lo que es el más negativo), es decir $x_1$, está será nuestra columna pivote.

| ($V_B$) | $C.E.$        | Solución      | Relación mín.                           |
| ------- | ------------- | ------------- | --------------------------------------- |
| s_1     | $\frac{3}{2}$ | $\frac{3}{2}$ | $\frac{\frac{3}{2}}{\frac{3}{2}}=1$     |
| x_2     | $\frac{1}{2}$ | $\frac{5}{2}$ | ==$\frac{\frac{5}{2}}{\frac{1}{2}}=5$== |


2. $s_1$ es la variable con la relación mínima así que será nuestra fila pivote, entonces dividiremos todo entre la intersección de la fila pivote y la columna pivote, es decir 2.

| ($V_B$) | $Z$             | x_1                                 | x_2             | s_1                                 | s_2                                             | Solución                            |
| ------- | --------------- | ----------------------------------- | --------------- | ----------------------------------- | ----------------------------------------------- | ----------------------------------- |
| $Z$     | $1$             | $\frac{-1}{2}$                      | $0$             | $0$                                 | $\frac{3}{2}$                                   | $\frac{15}{2}$                      |
| $x_1$   | $\frac{0}{2}=0$ | $\frac{\frac{3}{2}}{\frac{3}{2}}=1$ | $\frac{0}{2}=0$ | $\frac{1}{\frac{3}{2}}=\frac{2}{3}$ | $\frac{\frac{-1}{2}}{\frac{3}{2}}=\frac{-1}{3}$ | $\frac{\frac{3}{2}}{\frac{3}{2}}=1$ |
| $x_2$   | $0$             | $\frac{1}{2}$                       | $1$             | $0$                                 | $\frac{1}{2}$                                   | $\frac{5}{2}$                       |

3. Ahora tenemos que actualizar las filas.

#### Actualizar $Z$

| Variables básicas         | Z   | x_1                | x_2 | s_1            | s_2            | Solución       |
| ------------------------- | --- | ------------------ | --- | -------------- | -------------- | -------------- |
| $Z$                       | $1$ | ==$\frac{-1}{2}$== | $0$ | $0$            | $\frac{3}{2}$  | $\frac{15}{2}$ |
| $x_1$                     | $0$ | $1$                | $0$ | $\frac{2}{3}$  | $\frac{-1}{3}$ | $1$            |
| $\frac{-1}{2}(x_1)$       | $0$ | $\frac{-1}{2}$     | $0$ | $\frac{-1}{3}$ | $\frac{1}{6}$  | $\frac{-1}{2}$ |
| $Z=Z-(\frac{-1}{2}(x_1))$ | $1$ | $0$                | $0$ | $\frac{1}{3}$  | $\frac{4}{3}$  | $8$            |


#### Actualizar $x_2$

| Variables básicas             | Z   | x_1               | x_2 | s_1            | s_2            | Solución      |
| ----------------------------- | --- | ----------------- | --- | -------------- | -------------- | ------------- |
| $x_2$                         | $0$ | ==$\frac{1}{2}$== | $1$ | $0$            | $\frac{1}{2}$  | $\frac{5}{2}$ |
| $x_1$                         | $0$ | $1$               | $0$ | $\frac{2}{3}$  | $\frac{-1}{3}$ | $1$           |
| $\frac{1}{2}(x_1)$            | $0$ | $\frac{1}{2}$     | $0$ | $\frac{1}{3}$  | $\frac{-1}{6}$ | $\frac{1}{2}$ |
| $x_2=x_2-(\frac{-1}{2}(x_1))$ | $0$ | $0$               | $1$ | $\frac{-1}{3}$ | $\frac{2}{3}$  | $2$           |


4. Actualizamos la tabla con las filas actualizadas.

| ($V_B$) | $Z$ | x_1 | x_2 | s_1            | s_2            | Solución |
| ------- | --- | --- | --- | -------------- | -------------- | -------- |
| $Z$     | $1$ | $0$ | $0$ | $\frac{1}{3}$  | $\frac{4}{3}$  | $8$      |
| $x_1$   | $0$ | $1$ | $0$ | $\frac{2}{3}$  | $\frac{-1}{3}$ | $1$      |
| $x_2$   | $0$ | $0$ | $1$ | $\frac{-1}{3}$ | $\frac{2}{3}$  | $2$      |

* Como ya no hay variables que afecten negativamente a Z, implica que ya encontramos el punto óptimo