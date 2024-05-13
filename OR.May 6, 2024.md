### Método Húngaro
1. Para todas las filas se determinará el elemento del costo mínimo en la fila i y se lo restamos a todos los elementos de la fila. 

2. Para todas las columnas se determinará el elemento del costo mínimo en la columna j y se lo restamos a todos los elementos de la columna.

3. Intentar determinar si ya existe una posible solución

# Modelo de Redes
Se utilizan para buscar los costos mínimos.

### Árbol de mínima expansión

1. Se establece el subconjunto actual de nodos $C_i$, todos los nodos con posibilidad ser una nueva conexión permanente $D_i$.
    * Desde el nodo i. Encontramos la mínima conexión desde un nodo de $C_i$ a un nodo de $D_i$.
    * Guardamos como una conexión permanente la arista que conecto $D_i$ con $C_i$ y el nodo ahora formará parte de $C_i$ en la siguiente iteración.

![Ejercicio 2. Expansión minima](./images/OR.May%206,%202024.Minimum%20Expansion%20Tree.png)