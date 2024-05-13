Utilice el algoritmo de Dijkstra para hallar la ruta más corta entre el nodo 1 y cualquier  nodo en la red de la figura adjunta. Es decir se debe calcular la ruta más corta para llegar a cualquier nodo de la red.

![Ejercicio Algoritmo de Dijkstra](./images/OR.May%2012,%202024.M3%205.5.img%201.png)

### Iteración 0
| Nodo | Etiqueta | Estado     |
| ---- | -------- | ---------- |
| $1$  | $[0, -]$ | Permanente |

### Iteración 1
| Nodo | Etiqueta | Estado     |
| ---- | -------- | ---------- |
| $1$  | $[0, -]$ | Permanente |
| $2$  | $[1,1]$  | Temporal   |
| $3$  | $[2,1]$  | Temporal   |

### Iteración 2
| Nodo | Etiqueta | Estado     |
| ---- | -------- | ---------- |
| $1$  | $[0, -]$ | Permanente |
| $2$  | $[1,1]$  | Temporal   |
| $3$  | $[2,1]$  | Permanente |
|      | $[2,2]$  | Temporal   |
| $4$  | $[4,3]$  | Temporal   |
| $5$  | $[3,3]$  | Temporal   |
|      | $[3,3]$  | Temporal   |
| $6$  | $[6,3]$  | Temporal   |
|      | $[6,5]$  | Temporal   |

### Iteración 3
| Nodo | Etiqueta | Estado     |
| ---- | -------- | ---------- |
| $1$  | $[0, -]$ | Permanente |
| $2$  | $[1,1]$  | Temporal   |
| $3$  | $[2,1]$  | Permanente |
|      | $[2,2]$  | Temporal   |
| $4$  | $[4,3]$  | Temporal   |
| $5$  | $[3,3]$  | Temporal   |
|      | $[3,3]$  | Temporal   |
| $6$  | $[6,3]$  | Temporal   |
|      | $[6,5]$  | Temporal   |
| $7$  | $[10,5]$ | Temporal   |
| $8$  | $[8,6]$  | Temporal   |

Por último definimos las etiquetas permanentes finales.

| Nodo | Etiqueta | Estado     |
| ---- | -------- | ---------- |
| $1$  | $[0, -]$ | Permanente |
| $2$  | $[1,1]$  | Permanente |
| $3$  | $[2,1]$  | Temporal   |
|      | $[2,2]$  | Permanente |
| $4$  | $[4,3]$  | Permanente |
| $5$  | $[3,2]$  | Temporal   |
|      | $[3,3]$  | Permanente |
| $6$  | $[6,3]$  | Temporal   |
|      | $[6,5]$  | Permanente |
| $7$  | $[10,5]$ | Permanente |
| $8$  | $[8,6]$  | Permanente |

1) Del nodo 1 al nodo 8

   $(8)[8,6] \to (6)[6,5] \to (5)[3,3] \to (3)[2,2] \to (2)[1,1] \to (1)$
   
   ![Ejercicio Algoritmo de Dijkstra](./images/OR.May%2012,%202024.M3%205.5.img%202.png)


2) Del nodo 1 al nodo 7

   $(7)[10,5] \to (5)[3,3] \to (3)[2,2] \to (2)[1,1] \to (1)$

   ![Ejercicio Algoritmo de Dijkstra](./images/OR.May%2012,%202024.M3%205.5.img%203.png)

3) Del nodo 1 al nodo 6
   
   $(6)[6,5] \to (5)[3,3] \to (3)[2,2] \to (2)[1,1] \to (1)$

   ![Ejercicio Algoritmo de Dijkstra](./images/OR.May%2012,%202024.M3%205.5.img%204.png)
