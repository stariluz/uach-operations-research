En el transporte intermodal, los camiones de remolque cargados se transportan entre terminales ferroviarias sobre plataformas especiales. La figura adjunta, muestra la ubicación de las principales terminales ferroviarias en los Estados Unidos y las vías de ferrocarril existentes. El objetivo es decidir qué vías deben ser “revitalizadas” para manejar el tráfico intermodal. En particular, la terminal de Los Ángeles (LA) debe vincularse directamente a Chicago (CH) para acomodar el tráfico pesado esperado. Aparte de esa, todas las terminales restantes pueden vincularse directa o indirectamente, de modo que la longitud total (en millas) de las vías seleccionadas se minimice. Determine los segmentos de las vías ferroviarias que deben incluirse en el programa de revitalización.

De acuerdo al método de mínima expansión, realice los pasos 0, 1 y el paso general.

Identifique el grafo en cada iteración
(agregar grafo de cada iteración como evidencia de su procedimiento)

![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%201.png)

### Paso 0
$N=\{SE, LA, DE, CH, NY, DC, DA\}$

$C_0=\{\}$

$\check{C_0}=\{SE, LA, DE, CH, NY, DC, DA\}$

### Paso 1

En base a la restricción,  comenzamos con una conexión establecida debido a las restricciones, entonces:

$C_1=\{LA, CH\}$

$\check{C_1}=\{SE, DE, NY, DC, DA\}$

![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%202.png)

### Paso general

- $k=2$
 
  $C_2=\{LA, CH, NY\}$

  $\check{C_2}=\{SE, DE, DC, DA\}$

  ![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%203.png)

- $k=3$
 
  $C_3=\{LA, CH, NY, DC\}$

  $\check{C_3}=\{SE, DE, DA\}$

  ![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%204.png)

- $k=4$
 
  $C_4=\{LA, CH, NY, DC, DA\}$

  $\check{C_4}=\{SE, DE\}$

  ![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%205.png)

- $k=5$
 
  $C_5=\{LA, CH, NY, DC, DA, DE\}$

  $\check{C_5}=\{SE\}$
  
  ![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%206.png)

- $k=6$
 
  $C_6=\{LA, CH, NY, DC, DA, DE, SE\}$

  $\check{C_6}=\{\}$

  ![Exercise image](./images/OR.May%2012,%202024.M3%205.2.img%207.png)

Y con eso completamos el arbol de mínima expansión.