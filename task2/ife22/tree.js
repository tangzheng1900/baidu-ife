/**
 * Created by john on 2016/4/26.
 */

//
function preOrder(node) {
    if(!(node==null)){
        putstr(node.show()+' ');
        preOrder(node.left);
        preOrder(node.right);
    }

}

//
function inOrder(node) {
    if(!(node==null)){
        inOrder(node.left);
        putstr(node.show()+' ');
        inOrder(node.right);
    }

}

//
function postOrder(node) {
    if(!(node==null)){
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show()+' ');
    }

}

//searching
function Node(data,left,right) {

    this.data=data;
    this.left=left;
    this.right=right;
    this.show=show;

}

function show() {
    return this.data;

}