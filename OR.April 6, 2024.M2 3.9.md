Considere el siguiente modelo PL

$Max Z = 2x_1 + x_2 - 3x_3 + 5x_4$

$x_1 + 2x_2 + 2x_3 + 4x_4 \leq 40$

$2x_1 - x_2 + x_3 + 2x_4 \leq 8$

$4x_1 - 2x_2 + x_3 - x_4 \leq 10$

$x_1,x_2,x_3,x_4 \geq 0$

Obtenga la solución óptima de acuerdo al algoritmo Simplex, tome como referencia el ejemplo de la lectura.

### Definición de ecuaciones
  
$Z - 2x_1 - x_2 + 3x_3 - 5x_4 + 0s_1 + 0s_2 + 0s_3 = 0$

$x_1 + 2x_2 + 2x_3 + 4x_4 + s_1 = 40$

$2x_1 - x_2 + x_3 + 2x_4 + s_2 = 8$

$4x_1 - 2x_2 + x_3 - x_4 + s_3 = 10$


> $m=\textrm{numero de ecuaciones}$
>
> $n=\textrm{numero de variables}$
>
> Para calcular la cantidad de puntos de esquina
> $C_m^n=\frac{n!}{m(n-m)!}$

$m=3, n=7$

$C_m^n=\frac{7!}{3(7-3)!}=70$

### Identificar variables básicas ($V_B$) y variables no básicas ($V_{NB}$)
  
Para el punto $A$ sabemos que  $(x_1,x_2,x_3,x_4)=(0,0,0,0)$, indicando que estás son nuestras $V_{NB}$ y $s_1,s_2,s_3$ son nuestras $V_B$

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $Z$   | $1$ | $-2$  | $-1$  | $3$   | $-5$  | $0$   | $0$   | $0$   | $0$        |
| $s_1$ | $0$ | $1$   | $2$   | $2$   | $4$   | $1$   | $0$   | $0$   | $40$       |
| $s_2$ | $0$ | $2$   | $-1$  | $1$   | $2$   | $0$   | $1$   | $0$   | $8$        |
| $s_3$ | $0$ | $4$   | $-2$  | $1$   | $-1$  | $0$   | $0$   | $1$   | $10$       |

## Primera iteración

### Seleccionar variable de entrada ($V_E$)

> ¿Qué variable de mi función $Z$ afecta más a mi modelo?

El modelo busca maximizar, para obtener la ecuación de Z, pasamos la función al lado izquierdo, por esto la variable que afecta más es la más negativa.

$V_E=x_4$

| Variables básicas | Columna $V_E$ | Columna $Solución$ | Relación mínima     | Válida |
| ----------------- | ------------- | ------------------ | ------------------- | ------ |
| $s_1$             | $4$           | $40$               | $\frac{40}{4}=10$   | Sí     |
| $s_2$             | $2$           | $8$                | ==$\frac{8}{2}=4$== | Sí     |
| $s_3$             | $-1$          | $10$               | $\frac{10}{-1}=-10$ | No     |

$s_2$ es nuestra variable pivote ($V_P$)

### Actualizar la fila de la variable pivote ($V_P$)
Consideraremos que $M$ es nuestra matriz de las variables básicas.

Todos los valores en la fila $V_P$, es decir, todos los valores $M_{V_P},j$
los dividiremos entre el valor ubicado en la intersección de la fila $V_P$ y la columna $V_E$:

> $M_{V_P},j=\frac{M_{V_P,j}}{M_{V_P,V_E}}$

En este caso el valor de $M_{V_P,V_E}$ es $2$.

Sustituímos $V_P$ por $V_E$ en la columna $V_B$. Es decir $s_2$ por $x_4$, esto indica que nuestra fila pivote $V_P$ ahora se llamá $x_4$

| $V_B$ | $Z$ | $x_1$           | $x_2$          | $x_3$         | $x_4$           | $s_1$ | $s_2$         | $s_3$ | $Solución$      |
| ----- | --- | --------------- | -------------- | ------------- | --------------- | ----- | ------------- | ----- | --------------- |
| $x_4$ | $0$ | $\frac{2}{2}=1$ | $\frac{-1}{2}$ | $\frac{1}{2}$ | $\frac{2}{2}=1$ | $0$   | $\frac{1}{2}$ | $0$   | $\frac{8}{2}=4$ |

| $V_B$ | $Z$ | $x_1$ | $x_2$          | $x_3$         | $x_4$ | $s_1$ | $s_2$         | $s_3$ | $Solución$ |
| ----- | --- | ----- | -------------- | ------------- | ----- | ----- | ------------- | ----- | ---------- |
| $Z$   | $1$ | $-2$  | $-1$           | $3$           | $-5$  | $0$   | $0$           | $0$   | $0$        |
| $s_1$ | $0$ | $1$   | $2$            | $2$           | $4$   | $1$   | $0$           | $0$   | $40$       |
| $x_4$ | $0$ | $1$   | $\frac{-1}{2}$ | $\frac{1}{2}$ | $1$   | $0$   | $\frac{1}{2}$ | $0$   | $4$        |
| $s_3$ | $0$ | $4$   | $-2$           | $1$           | $-1$  | $0$   | $0$           | $1$   | $10$       |

### Actualizar las demás filas respecto a la fila pivote
> Para todas las filas $M_i$: <br>
> $M_i = M_i -  M_{i,V_E} \cdot M_{V_P}$

#### Actualizar Z

| $V_B$           | $Z$ | $x_1$ | $x_2$          | $x_3$          | $x_4$    | $s_1$ | $s_2$          | $s_3$ | $Solución$ |
| --------------- | --- | ----- | -------------- | -------------- | -------- | ----- | -------------- | ----- | ---------- |
| $Z$             | $1$ | $-2$  | $-1$           | $3$            | ==$-5$== | $0$   | $0$            | $0$   | $0$        |
| $x_4$           | $0$ | $1$   | $\frac{-1}{2}$ | $\frac{1}{2}$  | $1$      | $0$   | $\frac{1}{2}$  | $0$   | $4$        |
| $-5x_4$         | $0$ | $-5$  | $\frac{5}{2}$  | $\frac{-5}{2}$ | $-5$     | $0$   | $\frac{-5}{2}$ | $0$   | $-20$      |
| $Z=Z - (-5x_4)$ | $1$ | $3$   | $\frac{-7}{2}$ | $\frac{11}{2}$ | $0$      | $0$   | $\frac{5}{2}$  | $0$   | $20$       |

#### Actualizar $s_1$

| $V_B$              | $Z$ | $x_1$ | $x_2$          | $x_3$         | $x_4$   | $s_1$ | $s_2$         | $s_3$ | $Solución$ |
| ------------------ | --- | ----- | -------------- | ------------- | ------- | ----- | ------------- | ----- | ---------- |
| $s_1$              | $0$ | $1$   | $2$            | $2$           | ==$4$== | $1$   | $0$           | $0$   | $40$       |
| $x_4$              | $0$ | $1$   | $\frac{-1}{2}$ | $\frac{1}{2}$ | $1$     | $0$   | $\frac{1}{2}$ | $0$   | $4$        |
| $4x_4$             | $0$ | $4$   | $-2$           | $2$           | $4$     | $0$   | $2$           | $0$   | $16$       |
| $s_1 = s_1 - 4x_4$ | $0$ | $-3$  | $4$            | $0$           | $0$     | $1$   | $-2$          | $0$   | $24$       |

#### Actualizar $s_3$

| $V_B$                 | $Z$ | $x_1$ | $x_2$          | $x_3$          | $x_4$    | $s_1$ | $s_2$          | $s_3$ | $Solución$ |
| --------------------- | --- | ----- | -------------- | -------------- | -------- | ----- | -------------- | ----- | ---------- |
| $s_3$                 | $0$ | $4$   | $-2$           | $1$            | ==$-1$== | $0$   | $0$            | $1$   | $10$       |
| $x_4$                 | $0$ | $1$   | $\frac{-1}{2}$ | $\frac{1}{2}$  | $1$      | $0$   | $\frac{1}{2}$  | $0$   | $4$        |
| $-1x_4$               | $0$ | $-1$  | $\frac{1}{2}$  | $\frac{-1}{2}$ | $-1$     | $0$   | $\frac{-1}{2}$ | $0$   | $-4$       |
| $s_3 = s_3 - (-1x_4)$ | $0$ | $5$   | $\frac{-5}{2}$ | $\frac{3}{2}$  | $0$      | $0$   | $\frac{1}{2}$  | $1$   | $14$       |

### Actualizar tabla con las filas actualizadas

| $V_B$ | $Z$ | $x_1$ | $x_2$          | $x_3$          | $x_4$ | $s_1$ | $s_2$         | $s_3$ | $Solución$ |
| ----- | --- | ----- | -------------- | -------------- | ----- | ----- | ------------- | ----- | ---------- |
| $Z$   | $1$ | $3$   | $\frac{-7}{2}$ | $\frac{11}{2}$ | $0$   | $0$   | $\frac{5}{2}$ | $0$   | $20$       |
| $s_1$ | $0$ | $-3$  | $4$            | $0$            | $0$   | $1$   | $-2$          | $0$   | $24$       |
| $x_4$ | $0$ | $1$   | $\frac{-1}{2}$ | $\frac{1}{2}$  | $1$   | $0$   | $\frac{1}{2}$ | $0$   | $4$        |
| $s_3$ | $0$ | $5$   | $\frac{-5}{2}$ | $\frac{3}{2}$  | $0$   | $0$   | $\frac{1}{2}$ | $1$   | $14$       |

Esté $PE$ es $B$.

## Segunda iteración

### Seleccionar variable de entrada ($V_E$)

$V_E=x_2$

| Variables básicas | Columna $V_E$  | Columna $Solución$ | Relación mínima                         | Válida |
| ----------------- | -------------- | ------------------ | --------------------------------------- | ------ |
| $s_1$             | $4$            | $24$               | ==$\frac{24}{4}=6$==                    | Sí     |
| $x_4$             | $\frac{-1}{2}$ | $4$                | $\frac{4}{\frac{-1}{2}}=-8$             | No     |
| $s_3$             | $\frac{-5}{2}$ | $14$               | $\frac{14}{\frac{-5}{2}}=\frac{-28}{5}$ | No     |

$s_1$ es nuestra variable pivote ($V_P$)

### Actualizar la fila de la variable pivote ($V_P$)

$M_{V_P,V_E}=4$.

> $M_{V_P},j=\frac{M_{V_P,j}}{M_{V_P,V_E}}$ 

$s_1 \to x_2$

| $V_B$ | $Z$ | $x_1$          | $x_2$             | $x_3$ | $x_4$ | $s_1$         | $s_2$                       | $s_3$ | $Solución$       |
| ----- | --- | -------------- | ----------------- | ----- | ----- | ------------- | --------------------------- | ----- | ---------------- |
| $x_2$ | $0$ | $\frac{-3}{4}$ | $\frac{-4}{-4}=1$ | $0$   | $0$   | $\frac{1}{4}$ | $\frac{-2}{4}=\frac{-1}{2}$ | $0$   | $\frac{24}{4}=6$ |

| $V_B$ | $Z$ | $x_1$          | $x_2$          | $x_3$          | $x_4$ | $s_1$         | $s_2$          | $s_3$ | $Solución$ |
| ----- | --- | -------------- | -------------- | -------------- | ----- | ------------- | -------------- | ----- | ---------- |
| $Z$   | $1$ | $3$            | $\frac{-7}{2}$ | $\frac{11}{2}$ | $0$   | $0$           | $\frac{5}{2}$  | $0$   | $20$       |
| $x_2$ | $0$ | $\frac{-3}{4}$ | $1$            | $0$            | $0$   | $\frac{1}{4}$ | $\frac{-1}{2}$ | $0$   | $6$        |
| $x_4$ | $0$ | $1$            | $\frac{-1}{2}$ | $\frac{1}{2}$  | $1$   | $0$           | $\frac{1}{2}$  | $0$   | $4$        |
| $s_3$ | $0$ | $5$            | $\frac{-5}{2}$ | $\frac{3}{2}$  | $0$   | $0$           | $\frac{1}{2}$  | $1$   | $14$       |

### Actualizar las demás filas respecto a la fila pivote
> Para todas las filas $M_i$: <br>
> $M_i = M_i -  M_{i,V_E} \cdot M_{V_P}$

#### Actualizar Z

| $V_B$                       | $Z$ | $x_1$          | $x_2$              | $x_3$          | $x_4$ | $s_1$          | $s_2$          | $s_3$ | $Solución$ |
| --------------------------- | --- | -------------- | ------------------ | -------------- | ----- | -------------- | -------------- | ----- | ---------- |
| $Z$                         | $1$ | $3$            | ==$\frac{-7}{2}$== | $\frac{11}{2}$ | $0$   | $0$            | $\frac{5}{2}$  | $0$   | $20$       |
| $x_2$                       | $0$ | $\frac{-3}{4}$ | $1$                | $0$            | $0$   | $\frac{1}{4}$  | $\frac{-1}{2}$ | $0$   | $6$        |
| $\frac{-7}{2}x_2$           | $0$ | $\frac{21}{8}$ | $\frac{-7}{2}$     | $0$            | $0$   | $\frac{-7}{8}$ | $\frac{7}{4}$  | $0$   | $-21$      |
| $Z = Z - (\frac{-7}{2}x_2)$ | $1$ | $\frac{3}{8}$  | $0$                | $\frac{11}{2}$ | $0$   | $\frac{7}{8}$  | $\frac{3}{4}$  | $0$   | $41$       |

#### Actualizar $x_4$

| $V_B$                          | $Z$ | $x_1$          | $x_2$              | $x_3$         | $x_4$ | $s_1$          | $s_2$          | $s_3$ | $Solución$ |
| ------------------------------ | --- | -------------- | ------------------ | ------------- | ----- | -------------- | -------------- | ----- | ---------- |
| $x_4$                          | $0$ | $1$            | ==$\frac{-1}{2}$== | $\frac{1}{2}$ | $1$   | $0$            | $\frac{1}{2}$  | $0$   | $4$        |
| $x_2$                          | $0$ | $\frac{-3}{4}$ | $1$                | $0$           | $0$   | $\frac{1}{4}$  | $\frac{-1}{2}$ | $0$   | $6$        |
| $\frac{-1}{2}x_2$              | $0$ | $\frac{3}{8}$  | $\frac{-1}{2}$     | $0$           | $0$   | $\frac{-1}{8}$ | $\frac{1}{4}$  | $0$   | $-3$       |
| $x_4 = x_4 -(\frac{-1}{2}x_2)$ | $0$ | $\frac{5}{8}$  | $0$                | $\frac{1}{2}$ | $1$   | $\frac{1}{8}$  | $\frac{1}{4}$  | $0$   | $7$        |

#### Actualizar $s_3$

| $V_B$                           | $Z$ | $x_1$          | $x_2$              | $x_3$         | $x_4$ | $s_1$          | $s_2$          | $s_3$ | $Solución$ |
| ------------------------------- | --- | -------------- | ------------------ | ------------- | ----- | -------------- | -------------- | ----- | ---------- |
| $s_3$                           | $0$ | $5$            | ==$\frac{-5}{2}$== | $\frac{3}{2}$ | $0$   | $0$            | $\frac{1}{2}$  | $1$   | $14$       |
| $x_2$                           | $0$ | $\frac{-3}{4}$ | $1$                | $0$           | $0$   | $\frac{1}{4}$  | $\frac{-1}{2}$ | $0$   | $6$        |
| $\frac{-5}{2}x_2$               | $0$ | $\frac{15}{8}$ | $\frac{-5}{2}$     | $0$           | $0$   | $\frac{-5}{8}$ | $\frac{5}{4}$  | $0$   | $-15$      |
| $s_3 = s_3 - (\frac{-5}{2}x_2)$ | $0$ | $\frac{25}{8}$ | $0$                | $\frac{3}{2}$ | $0$   | $\frac{5}{8}$  | $\frac{-3}{4}$ | $1$   | $29$       |


### Actualizar tabla con las filas actualizadas

| $V_B$ | $Z$ | $x_1$          | $x_2$ | $x_3$          | $x_4$ | $s_1$         | $s_2$          | $s_3$ | $Solución$ |
| ----- | --- | -------------- | ----- | -------------- | ----- | ------------- | -------------- | ----- | ---------- |
| $Z$   | $1$ | $\frac{3}{8}$  | $0$   | $\frac{11}{2}$ | $0$   | $\frac{7}{8}$ | $\frac{3}{4}$  | $0$   | $41$       |
| $x_2$ | $0$ | $\frac{-3}{4}$ | $1$   | $0$            | $0$   | $\frac{1}{4}$ | $\frac{-1}{2}$ | $0$   | $6$        |
| $x_4$ | $0$ | $\frac{5}{8}$  | $0$   | $\frac{1}{2}$  | $1$   | $\frac{1}{8}$ | $\frac{1}{4}$  | $0$   | $7$        |
| $s_3$ | $0$ | $\frac{25}{8}$ | $0$   | $\frac{3}{2}$  | $0$   | $\frac{5}{8}$ | $\frac{-3}{4}$ | $1$   | $29$       |

## Tercera iteración

### Seleccionar variable de entrada ($V_E$)
Como la función $Z$ ya no tiene variables negativas, significa que estás
ya no tendrán impacto en nuestro modelo, por lo cual encontramos nuestro el punto óptimo.

Este $PE$ es $C$, y $Z$ en el punto $C$ vale $41$, el máximo valor posible para $Z$ dadas las restricciones..