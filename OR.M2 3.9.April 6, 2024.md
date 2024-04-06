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

## Primera iteración
### Identificar variables básicas ($V_B$) y variables no básicas ($V_{NB}$).
  
Para el punto $A$ sabemos que  $(x_1,x_2,x_3,x_4)=(0,0,0,0)$, indicando que estás son nuestras $V_{NB}$ y $s_1,s_2,s_3$ son nuestras $V_B$

| $V_B$ | $Z$ | x_1  | x_2  | x_3  | x_4  | s_1 | s_2 | s_3 | Solución |
| ----- | --- | ---- | ---- | ---- | ---- | --- | --- | --- | -------- |
| $Z$   | $1$ | $-2$ | $-1$ | $+3$ | $-5$ | $0$ | $0$ | $0$ | $0$      |
| $s_1$ | $0$ | $1$  | $2$  | $2$  | $4$  | $1$ | $0$ | $0$ | $40$     |
| $s_2$ | $0$ | $2$  | $-1$ | $1$  | $2$  | $0$ | $1$ | $0$ | $8$      |
| $s_3$ | $0$ | $4$  | $-1$ | $1$  | $-1$ | $0$ | $0$ | $1$ | $10$     |


### Seleccionar variable de entrada ($V_E$)

> ¿Qué variable de mi función $Z$ afecta más a mi modelo?

El modelo busca maximizar, para obtener la ecuación de Z, pasamos la función al lado izquierdo, por esto la variable que afecta más es la más negativa.

$V_E=x_4$

| Variables básicas | Valores de la columna $V_E$ | Solución | Relación mínima      | Válida |
| ----------------- | --------------------------- | -------- | -------------------- | ------ |
| s_1               | 6                           | 24       | ==$\frac{24}{5}=4$== | Sí     |
| s_2               | 1                           | 6        | $\frac{6}{1}=6$      | Sí     |
| s_3               | -1                          | 1        | $\frac{1}{-1}=-1$    | No     |
| s_4               | 0                           | 2        | $\frac{2}{0}=\infty$ | No     |
