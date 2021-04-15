class NodeClass {
    constructor(value) {
        /* Propiedades que tiene todo nodo */
        this.value = value;
        this.next = null; /* Generar el enlace entre los nodos */
    }
}

class listasCircularesSimples {
    constructor() {
        /* Propiedades que tiene toda lista */
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* AÑADE nodo al INICIO de la lista */
    unshiftNode(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        /* El nuevo nodo pasa a ser la cabeza de la lista */
        this.head = newNode;
        this.length++;
        return this;
    }

    //Remueve nodo por valor 
    removerPorValor(value){

        let inicio = this.head;
        let aux = null;
        let siguiente = null;

        //Verificamos si el nodo a eliminar es el primero
        if(this.head.value === value){
            //El primer nodo apunta al siguienre
            inicio = this.head.next;
            this.head = inicio;
            //La cola del nodo ahora apunta a la cabeza
            this.tail.next = this.head;
        }else{
            //Se crea una copia de la lista
            aux = this.head;
            //Recorre la lista hasta llegar al nodo anterior que se busca
            while(aux.next.value != value){
                aux = aux.next;
            }
            //Guardamos el nodo siguiente a eliminar
            if(aux.next == this.tail){
                this.tail = aux;
                this.tail.next = this.head;
            }else{
                //Enlaza el nodo anterior con el siguiente despues de él
                siguiente = aux.next;
                //Actualizamos el puntero del ultimo nodo
                aux.next = siguiente.next;
            }
            this.length--;
        }
    }

    //BUSCA un nodo por el PUNTERO(NodoBuscado) Santa
    getValorNodo(nodoBuscado) {
        if (nodoBuscado < 0 || nodoBuscado >= this.length) return null;
        let contadorNodos = 0;
        let nodoActual = this.head;
        while (contadorNodos != nodoBuscado) {
            nodoActual = nodoActual.next;
            contadorNodos++;
        }
        console.log(nodoActual);
        return nodoActual;
    }

    //Juan Felipe
    modificarNodo(nodoBuscado, value){
        
        let nodoActual = this.head;
        let encontrado = false;

        if(nodoActual != null){
            do{
                if (nodoActual.value === nodoBuscado) {
                    nodoActual.value = value;
                    encontrado = true;
                }
                nodoActual= nodoActual.next;
            }while(nodoActual != this.head && encontrado != true);
        }
    }

}
listaSimpleTest = new listasCircularesSimples();

listaSimpleTest.unshiftNode(1); /* añade nodo al inicio de la lista*/
listaSimpleTest.unshiftNode(2); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(3); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(4); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(5); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(6); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(7);
listaSimpleTest.unshiftNode(8);
listaSimpleTest.unshiftNode(9);

//Se remueve el nodo por referencia
listaSimpleTest.removerPorValor(1);
listaSimpleTest.removerPorValor(6);
//Se modifica el valor 
listaSimpleTest.modificarNodo(4, 20);
//Se busca el valor 
listaSimpleTest.getValorNodo(4);

//Imprimimos la lista
console.log(listaSimpleTest);
