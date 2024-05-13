### Problema 1

![Pasos del problema 1](./images/OR.May%206,%202024.M3%204.5.HungarianMethod%201.img%201.png)

Basado en los pasos del procedimiento.
Sea $P_i$ la persona de la fila $i$ y $A_j$ la actividad de la fila jota, esta es la lista de actividades que cada persona puede hacer:

$P_1 \to A_1,A_2,A_3$

$P_2 \to A_3$

$P_3 \to A_2,A_3$

$P_4 \to A_2,A_3,A_4$

$P_5 \to A_1,A_2,A_3,A_4,A_5$

Y podemos seleccionar una solución, donde cada persona realiza solo una actividad:

$P_1 \to A_1 \to 3$

$P_2 \to A_3 \to 2$

$P_3 \to A_2 \to 4$

$P_4 \to A_4 \to 3$

$P_5 \to A_5 \to 7$

Resultando en $\textrm{Min} Z=19$.

Se encontró una solución óptima luego de haber restado el mínimo de cada fila en su propia fila, y el mínimo de cada columna en su propia columna. En esta, la primer persona realiza la primer actividad, la segunda persona la tercera actividad, la tercera persona la segunda actividad, la cuarta persona la cuarta actividad, y la quinta persona la quinta actividad. 


### Problema 2
![Pasos del problema 2](./images/OR.May%206,%202024.M3%204.5.HungarianMethod%202.img%201.png)

Basado en los pasos del procedimiento.
Sea $P_i$ la persona de la fila $i$ y $A_j$ la actividad de la fila jota, esta es la lista de actividades que cada persona puede hacer:

$P_1 \to A_1,A_3,A_4$

$P_2 \to A_2$

$P_3 \to A_5$

$P_4 \to A_1,A_5$

$P_5 \to A_3$

Y podemos seleccionar una solución, donde cada persona realiza solo una actividad:

$P_1 \to A_4 \to 2$

$P_2 \to A_2 \to 1$

$P_3 \to A_5 \to 3$

$P_4 \to A_1 \to 2$

$P_5 \to A_3 \to 2$

Resultando en $\textrm{Min} Z=10$.

la primer persona realiza la primer actividad, la segunda persona la tercera actividad, la tercera persona la segunda actividad, la cuarta persona la cuarta actividad, y la quinta persona la quinta actividad. 