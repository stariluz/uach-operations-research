# Modelo de flujo máximo

### Iteración 1
![Iteración 1](./images/OR.May%2013,%202024.img%201.png)

### Iteración 2
![Iteración 2](./images/OR.May%2013,%202024.img%202.png)

### Iteración 3
![Iteración 3](./images/OR.May%2013,%202024.img%203.png)

### Iteración 4
![Iteración 4](./images/OR.May%2013,%202024.img%204.png)

### Iteración 5
![Iteración 5](./images/OR.May%2013,%202024.img%205.png)

### Resultado
![Resultado](./images/OR.May%2013,%202024.img%206.png)

Para obtener el flujo máximo del grafo, sumamos todos los $\textrm{Min}(f_i)$ que fuimos obteniendo en las iteraciones:

$\displaystyle\sum_{i=1}^{i=5} \textrm{Min}(f_i)=20+10+10+10+10=60$

### Flujo máximo en cada arista
Para obtenerlo, comparamos la tabla original, con la tabla final, y restaremos los flujos en las aristas, aquellos flujos negativos implican que el flujo es en la dirección contraria, por ende no los contamos, dicho esto, las operaciones dan la siguiente tabla como resultado.

![Comparación última iteración contra original](./images/OR.May%2013,%202024.img%207.png)

| Arista  | Operación                 | Flujo | Dirección |
| ------- | ------------------------- | ----- | --------- |
| $(1,2)$ | $(20,0)-(0,20)=(20,-20)$  | $20$  | $1\to2$   |
| $(1,3)$ | $(30,0)-(0,30)=(30,-30)$  | $30$  | $1\to3$   |
| $(1,4)$ | $(10,0)-(0,10)=(10,-10)$  | $10$  | $1\to4$   |
| $(2,1)$ | $(0,20)-(20,0)=(-20,20)$  | $0$   | $-$       |
| $(2,3)$ | $(40,0)-(40,0)=(0,0)$     | $0$   | $-$       |
| $(2,5)$ | $(30,0)-(10,20)=(20,-20)$ | $20$  | $2\to5$   |
| $(3,1)$ | $(0,30)-(30,0)=(-30,30)$  | $0$   | $-$       |
| $(3,2)$ | $(0,40)-(0,40)=(0,0)$     | $0$   | $-$       |
| $(3,4)$ | $(10,5)-(0,15)=(10,-10)$  | $10$  | $3\to4$   |
| $(3,5)$ | $(20,0)-(0,20)=(20,-20)$  | $20$  | $3\to5$   |
| $(4,1)$ | $(0,10)-(10,0)=(-10,10)$  | $0$   | $-$       |
| $(4,3)$ | $(5,10)-(15,0)=(-10,10)$  | $0$   | $-$       |
| $(4,5)$ | $(20,0)-(0,20)=(20,-20)$  | $20$  | $4\to5$   |
| $(5,2)$ | $(0,30)-(20,10)=(-20,20)$ | $0$   | $-$       |
| $(5,3)$ | $(0,20)-(20,0)=(-20,20)$  | $0$   | $-$       |
| $(5,4)$ | $(0,20)-(20,0)=(-20,20)$  | $0$   | $-$       |