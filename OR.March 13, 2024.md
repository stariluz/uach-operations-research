
> La **holgura** es el recurso disponible no utilizado. Se encuentra cuando el signo es $\leq$. Se representa con una $s$. En las ecuaciones se suma.
>
> El **superávit** es el recurso excedente utilizado mayor que el mínimo requerido. Se encuentra cuando el signo es $\geq$. Se representa con una $S$. En las ecuaciones se resta.

> $m=\textrm{numero de ecuaciones}$
>
> $n=\textrm{numero de variables}$
>
> Para calcular la cantidad de puntos de esquina
> $C_m^n=\frac{n!}{m(n-m)!}$


1. Ecuaciones

$R_1 \to 6x_1+4x_2+s_1=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_3 \to -x_1+x_2+s_3=1$

$R_4 \to x_2+s_4=2$

$R_5 \to x_1, x_2, s_1, s_2, s_3, s_4 \geq 2$

1. Vaciamos las variables básicas en una tabla. Para el punto $A$ sabemos que $(x_1,x_2)=(0,0)$ por lo que $s_1, s_2, s_3, s_4$ son nuestras variables básicas.

| Variables básicas | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $s_4$ | $Solucion$ |
| ----------------- | --- | ----- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $Z$               | $1$ | $-5$  | -4    | 0     | 0     | 0     | 0     | 0          |
| $s_1$             | $0$ | $6$   | 4     | 1     | 0     | 0     | 0     | 24         |
| $s_2$             | $0$ | $1$   | 2     | 0     | 1     | 0     | 0     | 6          |
| $s_3$             | $0$ | $-1$  | 1     | 0     | 0     | 1     | 0     | 1          |
| $s_4$             | $0$ | $0$   | 1     | 0     | 0     | 0     | 1     | 2          |

2. Seleccionar variable de entrada
**¿Qué variable de mi función $Z$ afecta más a mi modelo?** $x_1$, entonces está será nuestra variable de entrada.

> La función $Z$ está buscando maximizar. Para realizar el método tuvimos que pasar las variables que sumaban, restando, así que aquí buscaremos la variable más negativa, está es la que afecta más al modelo.

Ahora tomaremos los valores de la columna de la variable de entrada, y los vaciaremos según corresponda a su variable básica.

| Variables básicas | Variables de entrada | Solucion | Relación mínima      | Válida |
| ----------------- | -------------------- | -------- | -------------------- | ------ |
| s_1               | 6                    | 24       | ==$\frac{24}{6}=4$== | Sí     |
| s_2               | 1                    | 6        | $\frac{6}{1}=6$      | Sí     |
| s_3               | -1                   | 1        | $\frac{1}{-1}=-1$    | No     |
| s_4               | 0                    | 2        | $\frac{2}{0}=\infty$ | No     |


3. La fila de la variable con la relación mínima será nuestra fila pivote $M_q$. Para ello dividiremos todos los valores de la fila entre el elemento pivote de la misma fila. El elemento pivote es:
$M_{q,p} \textrm{ siendo } p \textrm{ la columna de la variable de entrada }$

Entonces, para todas las celdas $Mq,j$ de la fila $Mq$:   $Mq,j=\frac{M_{q,j}}{M_{q,p}}$

En nuestro ejemplo, $s_1$ será la fila pivote, por esto mismo, la variable básica que quedará será la variable de entrada $x_1$, y los valores se actualizarán según: $Mq,j=\frac{M_{q,j}}{M_{q,p}}$


| Variables básicas | Z   | x_1             | x_2                       | s_1           | s_2             | s_3             | s_4             | Solucion         |
| ----------------- | --- | --------------- | ------------------------- | ------------- | --------------- | --------------- | --------------- | ---------------- |
| x_1               | 0   | $\frac{6}{6}=1$ | $\frac{4}{6}=\frac{2}{3}$ | $\frac{1}{6}$ | $\frac{0}{6}=0$ | $\frac{0}{6}=0$ | $\frac{0}{6}=0$ | $\frac{24}{6}=4$ |

| Variables básicas | Z   | x_1 | x_2           | s_1           | s_2 | s_3 | s_4 | Solucion |
| ----------------- | --- | --- | ------------- | ------------- | --- | --- | --- | -------- |
| Z                 | 1   | -5  | -4            | 0             | 0   | 0   | 0   | 0        |
| x_1               | 0   | $1$ | $\frac{2}{3}$ | $\frac{1}{6}$ | $0$ | $0$ | $0$ | $4$      |
| s_2               | 0   | 1   | 2             | 0             | 1   | 0   | 0   | 6        |
| s_3               | 0   | -1  | 1             | 0             | 0   | 1   | 0   | 1        |
| s_4               | 0   | 1   | 0             | 0             | 0   | 1   | 2   |          |

1. Actualizaremos el resto de la tabla con la formula

$\textrm{ Fila actual } -  \textrm{ (Coeficiente variable de entrada en la fila actual)(Fila pivote) }$

###### Actualizar $Z$

| Variables básicas | Z   | x_1    | x_2             | s_1            | s_2 | s_3 | s_4 | Solucion |
| ----------------- | --- | ------ | --------------- | -------------- | --- | --- | --- | -------- |
| $Z$               | 1   | ==-5== | -4              | 0              | 0   | 0   | 0   | 0        |
| x_1               | 0   | $1$    | $\frac{2}{3}$   | $\frac{1}{6}$  | $0$ | $0$ | $0$ | $4$      |
| $-5(x_1)$         | 0   | -5     | $\frac{-20}{6}$ | $\frac{-5}{6}$ | 0   | 0   | 0   | -20      |
| $Z=Z-(-5(x_1))$   | 1   | 0      | $\frac{-4}{6}$  | $\frac{5}{6}$  | 0   | 0   | 0   | 20       |

###### Actualizar $s_2$

| Variables básicas  | Z   | x_1   | x_2           | s_1            | s_2 | s_3 | s_4 | Solucion |
| ------------------ | --- | ----- | ------------- | -------------- | --- | --- | --- | -------- |
| $s_2$              | 0   | ==1== | 2             | 0              | 1   | 0   | 0   | 6        |
| $1(x_1)$           | $0$ | $1$   | $\frac{4}{6}$ | $\frac{1}{6}$  | $0$ | $0$ | $0$ | $4$      |
| $s_2=s_2-(1(x_1))$ | $0$ | $0$   | $\frac{8}{6}$ | $\frac{-1}{6}$ | $1$ | $0$ | $0$ | $2$      |

###### Actualizar $s_3$

| Variables básicas   | Z   | x_1    | x_2            | s_1            | s_2 | s_3 | s_4 | Solucion |
| ------------------- | --- | ------ | -------------- | -------------- | --- | --- | --- | -------- |
| $s_3$               | 0   | ==-1== | 1              | 0              | 0   | 1   | 0   | 1        |
| $-1(x_1)$           | $0$ | $-1$   | $\frac{-4}{6}$ | $\frac{-1}{6}$ | $0$ | $0$ | $0$ | $-4$     |
| $s_3=s_3-(-1(x_1))$ | $0$ | $0$    | $\frac{10}{6}$ | $\frac{1}{6}$  | $0$ | $1$ | $0$ | $5$      |

###### Actualizar $s_4$

| Variables básicas  | Z   | x_1     | x_2 | s_1 | s_2 | s_3 | s_4 | Solucion |
| ------------------ | --- | ------- | --- | --- | --- | --- | --- | -------- |
| $s_4$              | $0$ | ==$0$== | $1$ | $0$ | $0$ | $0$ | $1$ | $2$      |
| $0(x_1)$           | $0$ | $0$     | $0$ | $0$ | $0$ | $0$ | $0$ | $0$      |
| $s_4=s_4-(0(x_1))$ | $0$ | $0$     | $1$ | $0$ | $0$ | $0$ | $1$ | $2$      |

> Vaciamos la actualización de todas las filas en la tabla

| Variables básicas | Z   | x_1 | x_2            | s_1            | s_2 | s_3 | s_4 | Solucion |
| ----------------- | --- | --- | -------------- | -------------- | --- | --- | --- | -------- |
| $Z$               | $1$ | $0$ | $\frac{-4}{6}$ | $\frac{5}{6}$  | $0$ | $0$ | $0$ | $20$     |
| $x_1$             | $0$ | $1$ | $\frac{4}{6}$  | $\frac{1}{6}$  | $0$ | $0$ | $0$ | $4$      |
| $s_2$             | $0$ | $0$ | $\frac{8}{6}$  | $\frac{-1}{6}$ | $1$ | $0$ | $0$ | $2$      |
| $s_3$             | $0$ | $0$ | $\frac{10}{6}$ | $\frac{1}{6}$  | $0$ | $1$ | $0$ | $5$      |
| $s_4$             | $0$ | $0$ | $1$            | $0$            | $0$ | $0$ | $1$ | $2$      |

Esto nos da el punto $B$, en el cual, observamos que las variables no básicas son $x_2,s_1$ por lo cual, $x_1, s_2, s_3, s_4$ son nuestras variables básicas.

¿Qué variable de mi función $Z$ afecta más a mi modelo (maximizando)? $x_2$, entonces este será nuestro nuevo pivote

| Variables básicas | Variables de entrada | Solucion | Relación mínima                         | Válida |
| ----------------- | -------------------- | -------- | --------------------------------------- | ------ |
| $x_1$             | $\frac{4}{6}$        | $4$      | $\frac{4}{\frac{4}{6}}=6$               | Sí     |
| $s_2$             | $\frac{8}{6}$        | $2$      | ==$\frac{2}{\frac{4}{5}}=\frac{3}{2}$== | Sí     |
| $s_3$             | $\frac{10}{6}$       | $5$      | $\frac{5}{-1}=3$                        | Si     |
| $s_4$             | $1$                  | $2$      | $\frac{2}{0}=2$                         | Si     |

Ahora, $s_2$ será la fila pivote, por esto mismo, la variable básica que quedará será la variable de entrada $x_2$, y los valores se actualizarán según: $Mq,j=\frac{M_{q,j}}{M_{q,p}}$

| Variables básicas | Z   | x_1 | x_2                         | s_1                                     | s_2                        | s_3 | s_4 | Solucion                    |
| ----------------- | --- | --- | --------------------------- | --------------------------------------- | -------------------------- | --- | --- | --------------------------- |
| $Z$               | $1$ | $0$ | $\frac{-4}{6}$              | $\frac{5}{6}$                           | $0$                        | $0$ | $0$ | $20$                        |
| $x_1$             | $0$ | $1$ | $\frac{4}{6}$               | $\frac{1}{6}$                           | $0$                        | $0$ | $0$ | $4$                         |
| $x_2$             | $0$ | $0$ | $\frac{8}{6}/\frac{8}{6}=1$ | $\frac{-1}{6}/\frac{8}{6}=\frac{-1}{8}$ | $1\frac{8}{6}=\frac{3}{4}$ | $0$ | $0$ | $2/\frac{8}{6}=\frac{3}{2}$ |
| $s_3$             | $0$ | $0$ | $\frac{10}{6}$              | $\frac{1}{6}$                           | $0$                        | $1$ | $0$ | $5$                         |
| $s_4$             | $0$ | $0$ | $1$                         | $0$                                     | $0$                        | $0$ | $1$ | $2$                         |

Actualizaremos el resto de la tabla con la formula

$\textrm{ Fila actual } -  \textrm{ (Coeficiente variable de entrada en la fila actual)(Fila pivote) }$

###### Actualizar $Z$

| Variables básicas         | Z   | x_1 | x_2                | s_1            | s_2            | s_3 | s_4 | Solucion      |
| ------------------------- | --- | --- | ------------------ | -------------- | -------------- | --- | --- | ------------- |
| $Z$                       | $1$ | $0$ | ==$\frac{-4}{6}$== | $\frac{5}{6}$  | $0$            | $0$ | $0$ | $20$          |
| $x_2$                     | $0$ | $0$ | $1$                | $\frac{-1}{8}$ | $\frac{3}{4}$  | $0$ | $0$ | $\frac{3}{2}$ |
| $\frac{-4}{6}(x_2)$       | $0$ | $0$ | $\frac{-4}{6}$     | $\frac{1}{12}$ | $\frac{-1}{2}$ | $0$ | $0$ | $-1$          |
| $Z=Z-(\frac{-4}{6}(x_2))$ | $1$ | $0$ | $0$                | $3/4$          | $\frac{1}{2}$  | $0$ | $0$ | $21$          |

###### Actualizar $x_1$

| Variables básicas            | Z   | x_1 | x_2               | s_1             | s_2            | s_3 | s_4 | Solucion      |
| ---------------------------- | --- | --- | ----------------- | --------------- | -------------- | --- | --- | ------------- |
| $x_1$                        | $0$ | $1$ | ==$\frac{4}{6}$== | $\frac{1}{6}$   | $0$            | $0$ | $0$ | $4$           |
| $x_2$                        | $0$ | $0$ | $1$               | $\frac{-1}{8}$  | $\frac{3}{4}$  | $0$ | $0$ | $\frac{3}{2}$ |
| $\frac{4}{6}(x_2)$           | $0$ | $0$ | $\frac{4}{6}$     | $\frac{-1}{12}$ | $\frac{1}{2}$  | $0$ | $0$ | $1$           |
| $x_1=x_1-(\frac{4}{6}(x_2))$ | $0$ | $1$ | $0$               | $1/4$           | $\frac{-1}{2}$ | $0$ | $0$ | $3$           |

###### Actualizar $s_3$

| Variables básicas             | Z   | x_1 | x_2                | s_1             | s_2           | s_3 | s_4 | Solucion        |
| ----------------------------- | --- | --- | ------------------ | --------------- | ------------- | --- | --- | --------------- |
| $s_3$                         | $0$ | $0$ | ==$\frac{10}{6}$== | $\frac{1}{6}$   | $0$           | $1$ | $0$ | $5$             |
| $x_2$                         | $0$ | $0$ | $1$                | $\frac{-1}{8}$  | $\frac{3}{4}$ | $0$ | $0$ | $\frac{3}{2}$   |
| $\frac{10}{6}(x_2)$           | $0$ | $0$ | $\frac{10}{6}$     | $\frac{-5}{24}$ | $\frac{5}{4}$ | $0$ | $0$ | $\frac{25}{3}$  |
| $s_3=s_3-(\frac{10}{6}(x_2))$ | $0$ | $0$ | $0$                | $\frac{3}{8}$   | $\frac{5}{4}$ | $1$ | $0$ | $\frac{-10}{3}$ |

###### Actualizar $s_4$

| Variables básicas  | Z   | x_1 | x_2     | s_1            | s_2            | s_3 | s_4 | Solucion      |
| ------------------ | --- | --- | ------- | -------------- | -------------- | --- | --- | ------------- |
| $s_4$              | $0$ | $0$ | ==$1$== | $0$            | $0$            | $0$ | $1$ | $2$           |
| $x_2$              | $0$ | $0$ | $1$     | $\frac{-1}{8}$ | $\frac{3}{4}$  | $0$ | $0$ | $\frac{3}{2}$ |
| $1(x_2)$           | $0$ | $0$ | $1$     | $\frac{-1}{8}$ | $\frac{3}{4}$  | $0$ | $0$ | $\frac{3}{2}$ |
| $s_4=s_4-(1(x_2))$ | $0$ | $0$ | $0$     | $\frac{1}{8}$  | $\frac{-3}{4}$ | $0$ | $1$ | $\frac{1}{2}$ |

> Vaciamos la actualización de todas las filas en la tabla

| Variables básicas | Z   | x_1 | x_2 | s_1            | s_2            | s_3 | s_4 | Solucion        |
| ----------------- | --- | --- | --- | -------------- | -------------- | --- | --- | --------------- |
| $Z$               | $1$ | $0$ | $0$ | $3/4$          | $\frac{1}{2}$  | $0$ | $0$ | $21$            |
| $x_1$             | $0$ | $1$ | $0$ | $1/4$          | $\frac{1}{2}$  | $0$ | $0$ | $3$             |
| $x_2$             | $0$ | $0$ | $1$ | $\frac{-1}{8}$ | $\frac{3}{4}$  | $0$ | $0$ | $\frac{3}{2}$   |
| $s_3$             | $0$ | $0$ | $0$ | $\frac{3}{8}$  | $\frac{5}{4}$  | $1$ | $0$ | $\frac{-10}{3}$ |
| $s_4$             | $0$ | $0$ | $0$ | $\frac{1}{8}$  | $\frac{-3}{4}$ | $0$ | $1$ | $\frac{1}{2}$   |

Esto nos da el punto $C$, en el cual, observamos que las variables no básicas son $s_1,s_2$ por lo cual, $x_1, x_2, s_3, s_4$ son nuestras variables básicas.

Volvemos a preguntar **¿Qué variable de mi función $Z$ afecta más a mi modelo?** Dado que actualmente, todas las variables para *Z* son nulas, o positivas, las variables ya no tienen impacto en el modelo. Esto quiere decir que encontramos nuestro punto óptimo.

$\textrm{Punto}_c \to Z=21$