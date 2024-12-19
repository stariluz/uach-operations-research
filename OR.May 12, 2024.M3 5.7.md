Aplique el algoritmo de Floyd a la red de la figura. Los arcos (7,6) y (6,4) son unidireccionales, y todas las distancias están en millas.

![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%201.png)

### $D_0$ y $S_0$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%202.png)

### $D_1$ y $S_1$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%203.png)

### $D_2$ y $S_2$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%204.png)

### $D_3$ y $S_3$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%205.png)

### $D_4$ y $S_4$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%206.png)

### $D_5$ y $S_5$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%207.png)

### $D_6$ y $S_6$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%208.png)

### $D_7$ y $S_7$
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%209.png)

Dado que ya concluímos el cíclo, estas son nuestras matrices resultantes $D_F$ y $S_F$:
![Ejercicio del algoritmo de Floyd](./images/OR.May%2012,%202024.M3%205.7.img%2010.png)

Determine la ruta más corta entre los siguientes pares de nodos:

1. Del nodo 1 al nodo 7.
   
   $1\to6\to4\to7$

   $1\to5\to6\to4\to7$

   $1\to3\to5\to6\to4\to7$

   $1\to3\to2\to5\to6\to4\to7$

2. Del nodo 7 al nodo 1.

   $7\to6\to5\to3\to1$
    
   $7\to6\to5\to2\to3\to1$
    

3. Del nodo 6 al nodo 7.

   $6\to4\to7$