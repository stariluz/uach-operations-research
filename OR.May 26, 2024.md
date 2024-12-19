Una compañía esta preparando un presupuesto para lanzar un nuevo producto.  La siguiente tabla muestra las actividades asociadas y su duración.

![Ejercicio](./images/OR.May%2026,%202024.M3%206.2.img%201.png)


a) Construya la red del proyecto.

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%202.png)


b) Utilizando los cálculos del método de la ruta crítica determine:
-  La duración total necesaria para completar el proyecto.
-  Clasifique las actividades del proyecto como críticas o no críticas.

### Paso adelantado
#### Iteración 0
$\textrm{ocurrencia temprana}_1=0$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%203.png)

#### Iteración 1
$\textrm{ocurrencia temprana}_2=max(0+10)=10$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%204.png)

#### Iteración 2
$\textrm{ocurrencia temprana}_3=max(10+5)=15$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%205.png)

#### Iteración 3
$\textrm{ocurrencia temprana}_4=max(15+3)=18$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%206.png)

#### Iteración 4
$\textrm{ocurrencia temprana}_5=max(0+7,18+2)=20$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%207.png)

#### Iteración 5
$\textrm{ocurrencia temprana}_6=max(20+1)=21$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%208.png)

#### Iteración 6
$\textrm{ocurrencia temprana}_7=max(21+14)=35$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%209.png)


### Paso retrasado
#### Iteración 0
$\textrm{ocurrencia tardía}_7=35$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2010.png)

#### Iteración 1
$\textrm{ocurrencia tardía}_6=min(35-14)=21$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2011.png)

#### Iteración 2
$\textrm{ocurrencia tardía}_5=min(21-1)=20$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2012.png)

#### Iteración 3
$\textrm{ocurrencia tardía}_4=min(20-2)=18$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2013.png)

#### Iteración 4
$\textrm{ocurrencia tardía}_3=min(18-3)=15$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2014.png)

#### Iteración 5
$\textrm{ocurrencia tardía}_2=min(15-5)=10$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2015.png)

#### Iteración 6
$\textrm{ocurrencia tardía}_1=min(10-10, 20-7)=0$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2016.png)


## Calculo de actividades críticas
![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%209.png)

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2016.png)


### Actividad $A=(1,2)$
$\textrm{ocurrencia tardía}_1=\textrm{ocurrencia temprana}_1=0$
$\textrm{ocurrencia tardía}_2=\textrm{ocurrencia temprana}_2=10$
$\textrm{ocurrencia tardía}_2-\textrm{ocurrencia temprana}_1=10-0=D_A=10$

La actividad $A$ es crítica.

### Actividad $B=(1,5)$
$\textrm{ocurrencia tardía}_1=\textrm{ocurrencia temprana}_1=0$
$\textrm{ocurrencia tardía}_5=\textrm{ocurrencia temprana}_5=20$
$\textrm{ocurrencia tardía}_5-\textrm{ocurrencia temprana}_1=20-0 \ne D_B=7$

La actividad $B$ no es crítica.

### Actividad $C=(2,3)$
$\textrm{ocurrencia tardía}_2=\textrm{ocurrencia temprana}_2=10$
$\textrm{ocurrencia tardía}_3=\textrm{ocurrencia temprana}_3=15$
$\textrm{ocurrencia tardía}_3-\textrm{ocurrencia temprana}_2=15-10=D_C=5$

La actividad $C$ es crítica.

### Actividad $D=(3,4)$
$\textrm{ocurrencia tardía}_3=\textrm{ocurrencia temprana}_3=15$
$\textrm{ocurrencia tardía}_4=\textrm{ocurrencia temprana}_4=18$
$\textrm{ocurrencia tardía}_4-\textrm{ocurrencia temprana}_3=18-15=D_D=3$

La actividad $D$ es crítica.

### Actividad $E=(4,5)$
$\textrm{ocurrencia tardía}_4=\textrm{ocurrencia temprana}_4=18$
$\textrm{ocurrencia tardía}_5=\textrm{ocurrencia temprana}_5=20$
$\textrm{ocurrencia tardía}_5-\textrm{ocurrencia temprana}_4=20-18=D_E=2$

La actividad $E$ es crítica.

### Actividad $F=(5,6)$
$\textrm{ocurrencia tardía}_5=\textrm{ocurrencia temprana}_5=20$
$\textrm{ocurrencia tardía}_6=\textrm{ocurrencia temprana}_6=21$
$\textrm{ocurrencia tardía}_6-\textrm{ocurrencia temprana}_5=21-20=D_F=1$

La actividad $F$ es crítica.

### Actividad $G=(6,7)$
$\textrm{ocurrencia tardía}_6=\textrm{ocurrencia temprana}_6=21$
$\textrm{ocurrencia tardía}_7=\textrm{ocurrencia temprana}_7=35$
$\textrm{ocurrencia tardía}_7-\textrm{ocurrencia temprana}_6=35-21=D_G=14$

La actividad $G$ es crítica.

## Duración del proyecto
$D_T=10+5+3+2+1+14=35$

![Diagrama](./images/OR.May%2026,%202024.M3%206.2.img%2017.png)