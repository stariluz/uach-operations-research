# Tranisción al modelo algebráico.

Si se nos pide encontrar una solución óptima sin graficar, haremos una transición al modelo algebraico.

## Ejemplo.

### Función objetivo

$\textrm{Max}Z=2x_1+3x_2$

### Restricciones:

$R_1 \to 2x_1+x_2 \leq 4$

$R_2 \to 1x_1+2x_2 \leq 5$

$R3 \to x_1,x_2 \geq 0$

> La **holgura** es el recurso disponible no utilizado. Se encuentra cuando el signo es $\leq$. Se representa con una $s$. En las ecuaciones se suma.
>
> El **superávit** es el recurso extra utilizado. Se encuentra cuando el signo es $\geq$. Se representa con una $S$. En las ecuaciones se resta.

1. Convertimos las restricciones a ecuaciones

$R_1 \to 2x_1+x_2+s_1=4$

$R_2 \to x_1+2x_2+s_2=5$

2. Obtener la cantidad de puntos esquina
> $m=\textrm{numero de ecuaciones}$
>
> $n=\textrm{numero de variables}$
>
> Para calcular la cantidad de puntos de esquina
> $C_m^n=\frac{n!}{m(n-m)!}$

$m=2, n=4$


$C_m^n=\frac{n!}{m(n-m)!}=\frac{4!}{2(4-2)!}=6$

3. 

| Variables no básicas | Variables básicas | Solución | Puntos Esquina | ¿Es factible? | $Z=2x_1+3x_2$ |
|-|-|-|-|-|-|
| $x_1, x_2$ | $s_1, s_2$ | $s_1=4, s_2=5$ | A | Si | $Z=0$ |
| $x_1, s_1$ | $x_2, s_2$ | $x_2=4, s_2=-3$ | B | No | --- |
| $x_1, s_2$ | $x_2, s_1$ | $x_2=2.5, s_1=1.5$ | C | Si | $Z=5$ |
| $x_2, s_1$ | $x_1, s_2$ | $x_1=2, s_2=3$ | D | Si | $Z=4$ |
| $x_2, s_2$ | $x_1, s_1$ | $x_1=5, s_1=-6$ | E | No | --- |
| $s_1, s_2$ | $x_1, x_2$ | $x_1=1, x_2=2$ | F |  Si |  $Z=8$ |

### Punto A
$x_1=0,x_2=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2(0)+(0)+s_1=4$

> $R_1 \to s_1=4$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to (0)+2(0)+s_2=5$

> $R_2 \to s_2=5$

### Punto B

$x_1=0,s_1=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2(0)+x_2+(0)=4$

> $R_1 \to x_2=4$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to (0)+2(4)+s_2=5$

> $R_2 \to s_2=5-8=-3$

### Punto C

$x_1=0,s_2=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2(0)+x_2+s_1=4$

$R_1 \to x_2+s_1=4$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to (0)+2x_2+(0)=5$

> $R_2 \to x_2=\frac{5}{2}=2.5$

$R_1 \to (2.5)+s_1=4$

> $R_1 \to s_1=4-2.5=1.5$

### Punto D

$x_2=0,s_1=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2x_1+(0)+(0)=4$

> $R_1 \to x_1=\frac{4}{2}=2$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to (2)+2(0)+s_2=5$

> $R_2 \to s_2=5-2=3$

### Punto E

$x_2=0,s_2=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2x_1+(0)+s_1=4$

$R_1 \to 2x_1+s_1=4$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to x_1+2(0)+(0)=5$

> $R_2 \to x_1=5$

$R_1 \to 2(5)+s_1=4$

> $R_1 \to s_1=4-10=-6$

### Punto F

$s_1=0,s_2=0$

$R_1 \to 2x_1+x_2+s_1=4$

$R_1 \to 2x_1+x_2+(0)=4$

$R_1 \to 2x_1+x_2=4$

$R_2 \to x_1+2x_2+s_2=5$

$R_2 \to x_1+2x_2+(0)=5$

$R_2 \to x_1+2x_2=5$

$R_1 \to x_2=4-2x_1$

$R_2 \to x_1+2(4-2x_1)=5$

$R_2 \to x_1+8-4x_1=5$

$R_2 \to -3x_1=5-8=-3$

> $R_2 \to x_1=\frac{-3}{-3}=1$

> $R_1 \to x_2=4-2(1)=2$


## Ejercicio de clase <small>(Ejercicio redimix)</small>

### Función objetivo

$\textrm{Max}Z=5x_1+4x_2$

### Restricciones:

$R_1 \to 6x_1+4x_2 \leq 24$

$R_2 \to x_1+2x_2 \leq 6$

$R3 \to x_1,x_2 \geq 0$

1. Convertimos las restricciones a ecuaciones

$R_1 \to 6x_1+4x_2+s_1=24$

$R_2 \to x_1+2x_2+s_2=6$

2. Obtener la cantidad de puntos esquina

$m=2, n=4$

$C_m^n=\frac{n!}{m(n-m)!}=\frac{4!}{2(4-2)!}=6$

3. Modelo algebráico

| Variables no básicas | Variables básicas | Solución | Puntos Esquina | ¿Es factible? | $Z=5x_1+4x_2$ |
|-|-|-|-|-|-|
| $x_1, x_2$ | $s_1, s_2$ | $s_1=24, s_2=6$ | A | Si | $Z=0$ |
| $x_1, s_1$ | $x_2, s_2$ | $x_2=24, s_2=-42$ | B | No | --- |
| $x_1, s_2$ | $x_2, s_1$ | $x_2=3, s_1=12$ | C | Si | $Z=12$ |
| $x_2, s_1$ | $x_1, s_2$ | $x_1=4, s_2=2$ | D | Si | $Z=20$ |
| $x_2, s_2$ | $x_1, s_1$ | $x_1=6, s_1=-12$ | E | No | --- |
| $s_1, s_2$ | $x_1, x_2$ | $x_1=3, x_2=1.5$ | F | Si | $Z=21$ |


### Punto A
$x_1=0,x_2=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6(0)+4(0)+s_1=24$

> $R_1 \to s_1=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to (0)+2(0)+s_2=6$

> $R_2 \to s_2=6$

### Punto B

$x_1=0,s_1=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6(0)+4x_2+(0)=24$

> $R_1 \to x_2=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to (0)+2(24)+s_2=6$

> $R_2 \to s_2=6-48=-42$

### Punto C

$x_1=0,s_2=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6(0)+4x_2+s_1=24$

$R_1 \to 4x_2+s_1=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to (0)+2x_2+(0)=6$

> $R_2 \to x_2=\frac{6}{2}=3$

$R_1 \to 4(3)+s_1=24$

> $R_1 \to s_1=24-12=12$

### Punto D

$x_2=0,s_1=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6x_1+4(0)+(0)=24$

> $R_1 \to x_1=\frac{24}{6}=4$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to (4)+2(0)+s_2=6$

> $R_2 \to s_2=6-4=2$

### Punto E

$x_2=0,s_2=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6x_1+4(0)+s_1=24$

$R_1 \to 6x_1+s_1=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to x_1+2(0)+(0)=6$

> $R_2 \to x_1=6$

$R_1 \to 6(6)+s_1=24$

> $R_1 \to s_1=24-36=-12$

### Punto F

$s_1=0,s_2=0$

$R_1 \to 6x_1+4x_2+s_1=24$

$R_1 \to 6x_1+4x_2+(0)=24$

$R_1 \to 6x_1+4x_2=24$

$R_2 \to x_1+2x_2+s_2=6$

$R_2 \to x_1+2x_2+(0)=6$

$R_2 \to x_1+2x_2=6$

$R_1 \to x_2=\frac{24-6x_1}{4}=6-1.5x_1$

$R_2 \to x_1+2(6-1.5x_1)=6$

$R_2 \to x_1+12-3x_1=6$

$R_2 \to -2x_1=6-12=-6$

> $R_2 \to x_1=\frac{-6}{-2}=3$

> $R_1 \to x_2=6-1.5(3)=1.5$
