Determine el flujo máximo y el flujo óptimo en cada arco para la red de la figura. Recuerde incluir evidencia del procedimiento y de las distintas iteraciones.

![Imagen de ejemplo](./images/OR.May%2019,%202024.M3%205.9.img%201.png)


### Iteración 1
![Iteracion 1](./images/OR.May%2019,%202024.M3%205.9.img%202.png)

### Iteración 2
![Iteracion 2](./images/OR.May%2019,%202024.M3%205.9.img%203.png)

### Iteración 3
![Iteracion 3](./images/OR.May%2019,%202024.M3%205.9.img%204.png)

### Iteración 4
![Iteracion 4](./images/OR.May%2019,%202024.M3%205.9.img%205.png)

### Iteración 5
![Iteracion 5](./images/OR.May%2019,%202024.M3%205.9.img%206.png)

### Resultado
![Resultado](./images/OR.May%2019,%202024.M3%205.9.img%207.png)

Para obtener el flujo máximo del grafo, sumamos todos los $\textrm{Min}(f_i)$ que fuimos obteniendo en las iteraciones:

$\displaystyle\sum_{i=1}^{i=5} \textrm{Min}(f_i)=10+5+4+4+2=25$

### Flujo máximo en cada arista
Para obtenerlo, comparamos la tabla original, con la tabla final, y restaremos los flujos en las aristas, aquellos flujos negativos implican que el flujo es en la dirección contraria, por ende no los contamos, dicho esto, las operaciones dan la siguiente tabla como resultado.

![Comparación última iteración contra original](./images/OR.May%2019,%202024.M3%205.9.img%208.png)

| Arista  | Operación                | Flujo | Dirección |
| ------- | ------------------------ | ----- | --------- |
| $(1,2)$ | $(8,0)-(1,7)=(7,-7)$     | $7$   | $1\to2$        |
| $(1,3)$ | $(14,0)-(0,14)=(14,-14)$ | $14$  | $1\to3$        |
| $(1,5)$ | $(4,0)-(0,4)=(4,-4)$     | $4$   | $1\to5$        |
| $(2,1)$ | $(0,8)-(7,1)=(-7,7)$     | $0$   | $-$        |
| $(2,3)$ | $(5,10)-(9,6)=(-4,4)$    | $0$   | $-$        |
| $(2,4)$ | $(7,6)-(2,11)=(5,-5)$    | $5$   | $2\to4$        |
| $(2,5)$ | $(6,0)-(0,6)=(6,-6)$     | $6$   | $2\to5$        |
| $(3,1)$ | $(0,14)-(14,0)=(-14,14)$ | $0$   | $-$        |
| $(3,2)$ | $(10,5)-(6,9)=(4,-4)$    | $4$   | $3\to2$        |
| $(3,4)$ | $(9,7)-(9,7)=(0,0)$      | $0$   | $-$        |
| $(3,5)$ | $(10,0)-(0,10)=(10,-10)$ | $10$  | $3\to5$        |
| $(4,2)$ | $(6,7)-(11,2)=(-5,5)$    | $0$   | $-$        |
| $(4,3)$ | $(7,9)-(7,9)=(0,0)$      | $0$   | $-$        |
| $(4,5)$ | $(5,0)-(0,5)=(5,-5)$     | $5$   | $4\to5$        |
| $(5,1)$ | $(0,4)-(4,0)=(-4,4)$     | $0$   | $-$        |
| $(5,2)$ | $(0,6)-(6,0)=(-6,6)$     | $0$   | $-$        |
| $(5,3)$ | $(0,10)-(10,0)=(-10,10)$ | $0$   | $-$        |
| $(5,4)$ | $(0,5)-(5,0)=(-5,5)$     | $0$   | $-$        |