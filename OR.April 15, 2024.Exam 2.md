> Exámen de Adrian Alejandro González Domínguez [359834]
> Lunes 15 de abril del 2024.

# Pregunta 1. Ejercicio 1: Modelo algrebráico.

$Maximizar Z = 8x_1 + 6x_2$ 

Sujeto a

$R_1 \to 2x_1 + 8x_2 \leq 24$

$R_2 \to 3x_1 + 4x_2 \leq 18$

$R_3 \to x_1,x_2 \geq 0$

### Definir ecuaciones

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$m=2, n=4$

## a)
Determine cuantos puntos de esquina se tienen en el modelo.

$C_m^n = \frac{n!}{m(n-m)!} = \frac{4!}{2(4-2)!} = 6$

## b)
Identifique el valor de m y n, posteriormente defina las variables básicas y no básicas del modelo

$m=2, n=4$

| $V_NB$     | $V_B$      | $PE$ |
| ---------- | ---------- | ---- |
| $x_1, x_2$ | $s_1, s_2$ | $A$  |
| $x_1, s_1$ | $x_2,s_2$  | $B$  |
| $x_1, s_2$ | $x_2,s_1$  | $C$  |
| $x_2, s_1$ | $x_1,s_2$  | $D$  |
| $x_2, s_2$ | $x_1,s_1$  | $E$  |
| $s_1, s_2$ | $x_1,x_2$  | $F$  |

## c)
Determine si los puntos de esquina son factibles 

### Punto A
$x_1,x_2 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2(0) + 8(0) + s_1 = 24$

==$R_1 \to s_1 = 24$==

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3(0) + 4(0) + s_2 = 28$

==$R_2 \to s_2 = 28$==

### Punto B
$x_1, s_1 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2(0) + 8x_2 + (0) = 24$

==$R_1 \to x_2 = \frac{24}{8} = 3 $==

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3(0) + 4(3) + s_2 = 28$

$R_2 \to 12 + s_2 = 28$

==$R_2 \to s_2 = 28 - 12 = 16$==

### Punto C
$x_1, s_2 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2(0) + 8x_2 + s_1 = 24$

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3(0) + 4x_2 + (0) = 28$

==$R_2 \to x_2 = \frac{28}{4} = 7$==

$R_1 \to 8(7) + s_1 = 24$

$R_1 \to 56 + s_1 = 24$

==$R_1 \to s_1 = 24 - 56 = -32$==

### Punto D
$x_2, s_1 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2x_1 + 8(0) + (0) = 24$

==$R_1 \to x_1 = \frac{24}{2} = 12$==

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3(12) + 4(0) + s_2 = 28$

$R_2 \to 36 + s_2 = 28$

=$R_2 \to s_2 = 28 - 36 = -8$=

### Punto E
$x_2, s_2 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2x_1 + 8(0) + s_1 = 24$

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3x_1 + 4(0) + (0) = 28$

$R_2 \to x_1 = \frac{28}{3}$

$R_1 \to 2(\frac{28}{3}) + s_1 = 24$

$R_1 \to \frac{56}{3} + s_1 = 24$

==$R_1 \to s_1 = 24 - \frac{56}{3} = \frac{72 - 56}{3} = \frac{16}{3}$==

### Punto F
$s_1, s_2 = 0$

$R_1 \to 2x_1 + 8x_2 + s_1 = 24$

$R_1 \to 2x_1 + 8x_2 + (0) = 24$

$R_1 \to 2x_1 + 8x_2 = 24$

$R_1 \to x_2 = \frac{24-2x_1}{8} = 3 - \frac{x_1}{4}$

$R_2 \to 3x_1 + 4x_2 + s_2 = 28$

$R_2 \to 3x_1 + 4x_2 = 28$

$R_2 \to 3x_1 + 4(3 - \frac{x_1}{4}) = 28$

$R_2 \to 3x_1 + 12 - x_1 = 28$

$R_2 \to 2x_1 = 28 - 12 = 16$

==$R_2 \to x_1 = \frac{16}{2} = 8$==

==$R_1 \to x_2 = 3 - \frac{(8)}{4} = 3 - 2 = 1$==

| $V_NB$     | $V_B$      | Solución básica              | $PE$ | Factible |
| ---------- | ---------- | ---------------------------- | ---- | -------- |
| $x_1, x_2$ | $s_1, s_2$ | $24, 28$                     | $A$  | Sí       |
| $x_1, s_1$ | $x_2,s_2$  | $3, 16$                      | $B$  | Sí       |
| $x_1, s_2$ | $x_2,s_1$  | $7, -32$                     | $C$  | No       |
| $x_2, s_1$ | $x_1,s_2$  | $12, -8$                     | $D$  | No       |
| $x_2, s_2$ | $x_1,s_1$  | $\frac{28}{3}, \frac{16}{3}$ | $E$  | Sí       |
| $s_1, s_2$ | $x_1,x_2$  | $8, 1$                       | $F$  | Sí       |

## d)
Obtenga el valor de z para aquellos puntos de esquina factibles.

| $V_NB$     | $V_B$      | Solución básica              | $PE$ | Factible | $Z = 8x_1 + 6x_2$                       |
| ---------- | ---------- | ---------------------------- | ---- | -------- | --------------------------------------- |
| $x_1, x_2$ | $s_1, s_2$ | $24, 28$                     | $A$  | Sí       | $Z = 0$                                 |
| $x_1, s_1$ | $x_2,s_2$  | $3, 16$                      | $B$  | Sí       | $Z = 120$                               |
| $x_2, s_2$ | $x_1,s_1$  | $\frac{28}{3}, \frac{16}{3}$ | $E$  | Sí       | $Z = \frac{320}{3} \thickapprox 106.66$ |
| $s_1, s_2$ | $x_1,x_2$  | $8, 1$                       | $F$  | Sí       | $Z = 70$                                |


# Pregunta 2. Ejercicio 2: Método Simplex

**Instrucciones**. Considerando el modelo y utilizando el desarrollo del método Simplex, obtenga la tabla inicial,
tablas intermedias y la tabla óptima así como su interpretación.

$Maximizar z= 3x1 + 6x2$

Sujeto a

$5x_1 + 4x_2 <= 20$

$-x_1 + x_2 <= 1$

$x_1 - 2x_2 <= 2$

$x_1,x_2 >= 0$

### Definir ecuaciones

$z - 3x1 - 6x2 = 0$

$5x_1 + 4x_2 + s_1 \leq 20$

$-x_1 + x_2 + s_2 \leq 1$

$x_1 - 2x_2 + s_3 \leq 2$

### Definir variables básicas y nó basicas
Para el $PE$ inicial ($A$), las holguras son las variables básicas.

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $Z$   | $1$ | $-3$  | $-6$  | $0$   | $0$   | $0$   | $0$        |
| $s_1$ | $0$ | $5$   | $4$   | $1$   | $0$   | $0$   | $20$       |
| $s_2$ | $0$ | $-1$  | $1$   | $0$   | $1$   | $0$   | $1$        |
| $s_3$ | $0$ | $1$   | $-2$  | $0$   | $0$   | $1$   | $2$        |

## Primera iteración

### Variable de entrada

La variable de entrada $V_E$ es $x_2$

| $V_B$ | Columna $V_E$ | $Solución$ | Relación mínima       | ¿Factible? |
| ----- | ------------- | ---------- | --------------------- | ---------- |
| $s_1$ | $4$           | $20$       | $\frac{20}{4} = 5$    | Sí         |
| $s_2$ | $1$           | $1$        | ==$\frac{1}{1} = 1$== | Sí         |
| $s_3$ | $-2$          | $2$        | $\frac{2}{-2} = -1$   | No         |

La variable pivote $V_P$ es $s_2$

### Actualizar fila pivote
$\textrm{Valor divisor} = 1$
$s_2 \to x_2$

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $x_2$ | $0$ | $-1$  | $1$   | $0$   | $1$   | $0$   | $1$        |

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $Z$   | $1$ | $-3$  | $-6$  | $0$   | $0$   | $0$   | $0$        |
| $s_1$ | $0$ | $5$   | $4$   | $1$   | $0$   | $0$   | $20$       |
| $x_2$ | $0$ | $-1$  | $1$   | $0$   | $1$   | $0$   | $1$        |
| $s_3$ | $0$ | $1$   | $-2$  | $0$   | $0$   | $1$   | $2$        |

### Actualizar las demás filas

#### Actualizar $Z$
| $V_B$             | $Z$ | $x_1$ | $x_2$    | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----------------- | --- | ----- | -------- | ----- | ----- | ----- | ---------- |
| $Z$               | $1$ | $-3$  | ==$-6$== | $0$   | $0$   | $0$   | $0$        |
| $x_2$             | $0$ | $-1$  | $1$      | $0$   | $1$   | $0$   | $1$        |
| $-6x_2$           | $0$ | $6$   | $-6$     | $0$   | $-6$  | $0$   | $-6$       |
| $Z = Z - (-6x_2)$ | $1$ | $-9$  | $0$      | $0$   | $6$   | $0$   | $6$        |

#### Actualizar $s_1$
| $V_B$              | $Z$ | $x_1$ | $x_2$   | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ------------------ | --- | ----- | ------- | ----- | ----- | ----- | ---------- |
| $s_1$              | $0$ | $5$   | ==$4$== | $1$   | $0$   | $0$   | $20$       |
| $x_2$              | $0$ | $-1$  | $1$     | $0$   | $1$   | $0$   | $1$        |
| $4x_2$             | $0$ | $-4$  | $4$     | $0$   | $4$   | $0$   | $4$        |
| $s_1 = s_1 - 4x_2$ | $0$ | $9$   | $0$     | $1$   | $-4$  | $0$   | $16$       |

#### Actualizar $s_3$
| $V_B$                 | $Z$ | $x_1$ | $x_2$    | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| --------------------- | --- | ----- | -------- | ----- | ----- | ----- | ---------- |
| $s_3$                 | $0$ | $1$   | ==$-2$== | $0$   | $0$   | $1$   | $2$        |
| $x_2$                 | $0$ | $-1$  | $1$      | $0$   | $1$   | $0$   | $1$        |
| $-2x_2$               | $0$ | $2$   | $-2$     | $0$   | $-2$  | $0$   | $-2$       |
| $s_3 = s_3 - (-2x_2)$ | $0$ | $-1$  | $0$      | $0$   | $2$   | $1$   | $4$        |

### Actualizar tabla con filas actualizadas

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $Solución$ |
| ----- | --- | ----- | ----- | ----- | ----- | ----- | ---------- |
| $Z$   | $1$ | $-9$  | $0$   | $0$   | $6$   | $0$   | $6$        |
| $s_1$ | $0$ | $9$   | $0$   | $1$   | $-4$  | $0$   | $16$       |
| $x_2$ | $0$ | $-1$  | $1$   | $0$   | $1$   | $0$   | $1$        |
| $s_3$ | $0$ | $-1$  | $0$   | $0$   | $2$   | $1$   | $4$        |

Este $PE$ es $B$.

## Segunda iteración

### Variable de entrada

La variable de entrada $V_E$ es $x_1$

| $V_B$ | Columna $V_E$ | $Solución$ | Relación mínima     | ¿Factible? |
| ----- | ------------- | ---------- | ------------------- | ---------- |
| $s_1$ | $9$           | $16$       | ==$\frac{16}{9}$==  | Sí         |
| $x_2$ | $-1$          | $1$        | $\frac{1}{-1} = -1$ | No         |
| $s_3$ | $-1$          | $4$        | $\frac{4}{-1} = -4$ | No         |

La variable pivote $V_P$ es $s_1$


### Actualizar fila pivote
$\textrm{Valor divisor} = 9$
$s_1 \to x_1$

| $V_B$ | $Z$ | $x_1$             | $x_2$ | $s_1$         | $s_2$          | $s_3$ | $Solución$     |
| ----- | --- | ----------------- | ----- | ------------- | -------------- | ----- | -------------- |
| $x_1$ | $0$ | $\frac{9}{9} = 1$ | $0$   | $\frac{1}{9}$ | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$ |

| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$         | $s_2$          | $s_3$ | $Solución$     |
| ----- | --- | ----- | ----- | ------------- | -------------- | ----- | -------------- |
| $Z$   | $1$ | $-9$  | $0$   | $0$           | $6$            | $0$   | $6$            |
| $x_1$ | $0$ | $1$   | $0$   | $\frac{1}{9}$ | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$ |
| $x_2$ | $0$ | $-1$  | $1$   | $0$           | $1$            | $0$   | $1$            |
| $s_3$ | $0$ | $-1$  | $0$   | $0$           | $2$            | $1$   | $4$            |


### Actualizar las demás filas

#### Actualizar $Z$
| $V_B$             | $Z$ | $x_1$ | $x_2$ | $s_1$         | $s_2$          | $s_3$ | $Solución$     |
| ----------------- | --- | ----- | ----- | ------------- | -------------- | ----- | -------------- |
| $Z$               | $1$ | $-9$  | $0$   | $0$           | $6$            | $0$   | $6$            |
| $x_1$             | $0$ | $1$   | $0$   | $\frac{1}{9}$ | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$ |
| $-9x_1$           | $0$ | $-9$  | $0$   | $-1$          | $4$            | $0$   | $-16$          |
| $Z = Z - (-9x_1)$ | $1$ | $0$   | $0$   | $1$           | $2$            | $0$   | $22$           |


#### Actualizar $x_2$
| $V_B$                 | $Z$ | $x_1$    | $x_2$ | $s_1$          | $s_2$          | $s_3$ | $Solución$      |
| --------------------- | --- | -------- | ----- | -------------- | -------------- | ----- | --------------- |
| $x_2$                 | $0$ | ==$-1$== | $1$   | $0$            | $1$            | $0$   | $1$             |
| $x_1$                 | $0$ | $1$      | $0$   | $\frac{1}{9}$  | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$  |
| $-1x_1$               | $0$ | $-1$     | $0$   | $\frac{-1}{9}$ | $\frac{4}{9}$  | $0$   | $\frac{-16}{9}$ |
| $x_2 = x_2 - (-1x_1)$ | $0$ | $0$      | $1$   | $\frac{1}{9}$  | $\frac{5}{9}$  | $0$   | $\frac{25}{9}$  |


#### Actualizar $x_2$
| $V_B$                 | $Z$ | $x_1$    | $x_2$ | $s_1$          | $s_2$          | $s_3$ | $Solución$      |
| --------------------- | --- | -------- | ----- | -------------- | -------------- | ----- | --------------- |
| $s_3$                 | $0$ | ==$-1$== | $0$   | $0$            | $2$            | $1$   | $4$             |
| $x_1$                 | $0$ | $1$      | $0$   | $\frac{1}{9}$  | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$  |
| $-1x_1$               | $0$ | $-1$     | $0$   | $\frac{-1}{9}$ | $\frac{4}{9}$  | $0$   | $\frac{-16}{9}$ |
| $s_3 = s_3 - (-1x_1)$ | $0$ | $0$      | $0$   | $\frac{1}{9}$  | $\frac{14}{9}$ | $1$   | $\frac{52}{9}$  |


### Actualizar tabla con filas actualizadas


| $V_B$ | $Z$ | $x_1$ | $x_2$ | $s_1$         | $s_2$          | $s_3$ | $Solución$     |
| ----- | --- | ----- | ----- | ------------- | -------------- | ----- | -------------- |
| $Z$   | $1$ | $0$   | $0$   | $1$           | $2$            | $0$   | $22$           |
| $x_1$ | $0$ | $1$   | $0$   | $\frac{1}{9}$ | $\frac{-4}{9}$ | $0$   | $\frac{16}{9}$ |
| $x_2$ | $0$ | $0$   | $1$   | $\frac{1}{9}$ | $\frac{5}{9}$  | $0$   | $\frac{25}{9}$ |
| $s_3$ | $0$ | $0$   | $0$   | $\frac{1}{9}$ | $\frac{14}{9}$ | $1$   | $\frac{52}{9}$ |

Este $PE$ es $C$. Dado que ya no hay más variables que impacten en la función Z,
encontramos su máximo valor, es decir $22$.

El punto $C$ se encuentra en $x_1=\frac{16}{9}, x_20\frac{25}{9}$.


# Pregunta 3
Considerando el  modelo 

$Maximizar Z = 4x_1 + 6x_2$

Sujeto a

$4x_1 + 3x_2 \leq 10$

$5x_1 + 9x_2 \leq20$

$x_1,x_2 \geq 0$

![Pregunta 3](image-1.png)

| $PE$ | $x_1, x_2    | $Z = 4x_1 + 6x_2$ |
| ---- | ------------ | ----------------- |
| A    | $0, 0$       | $0$               |
| B    | $0, 2.22$    | $13.32$           |
| C    | $1.42, 1.42$ | ==$14.2$==        |
| D    | $2.5, 0$     | $10$              |

$4x_1 + 3x_2 \leq 8$

| $PE$ | $x_1, x_2   | $Z = 4x_1 + 6x_2$ |
| ---- | ----------- | ----------------- |
| A    | $0, 0$      | $0$               |
| B    | $0, 2.22$   | $13.32$           |
| E    | $0.57, 1.9$ | ==$13.68$==       |
| F    | $2, 0$      | $8$               |

$\frac{14.2-13.68}{10-8}=\frac{0.52}{2}=0.26$

| $PE$ | $x_1, x_2 | 4x_1 + 3x_2 |
| ---- | --------- | ----------- |
| B    | $0,2.22$  | 6.66        |
| I    | $4,0$     | 16          |

$6.66 \leq \textrm{Disp. recurso 1} \leq 0.26$


# Pregunta 8
Considerando el siguiente modelo PL

$Maximizar z = 3x_1 + 4x_2$

Sujeto a

$x_1 + 7x_2 \leq 8$

$2x_1 + 4x_2 \geq 12$

$x_1, x_2 \geq 0$

¿Cuantas variables de holgura, superavit y variables artificiales debe
incluir el modelo?

$x_1 + 7x_2 + s_1 = 8$

$2x_1 + 4x_2 - S_1 + R_1 = 12$

**Respuesta: 1 Holgura, 1 Superavit y 1 variable artificial**

# Pregunta 9

De acuerdo a método Simplex determine:

En la siguiente tabla Inicial, cual es la variable que se debe elegir como entrada y cuál es la variable de salida?, cuando se pretende máximizar z.

![Pregunta 9](image.png)

$\textrm{Variable de entrada} = x_1$

| $V_B$ | Columna $V_E$ | $Solución$ | Relación mínima     | ¿Factible? |
| ----- | ------------- | ---------- | ------------------- | ---------- |
| $s_1$ | $2$           | $14$       | $\frac{14}{2} = 7$  | Sí         |
| $s_2$ | $1$           | $12$       | $\frac{12}{1} = 12$ | Sí         |

**Respuesta: $x_1,s_1$ son las variables de entrada y salida**