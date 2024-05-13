# El problema de la ruta más corta

Llegar del nodo origen, al nodo destino.


| #       | Nodos resueltos conectados directamente a nodos no resueltos | Nodos no resuelto más cercano conectado a un nodo resuelto | Distancia total | n-ésimo nodo más cercano | Distancia mínima | Última conexion |
| ------- | ------------------------------------------------------------ | ---------------------------------------------------------- | --------------- | ------------------------ | ---------------- | --------------- |
| 1       | 1                                                            | 2                                                          | 1               | 2                        | 2                | $1 \to 2$       |
| 2       | 1                                                            | 2                                                          | 1               | 2                        | 2                | $1 \to 2$       |

### Algoritmo de floyd
También se utiliza para encontrar la ruta más corta.
 