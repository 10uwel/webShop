import { makeAutoObservable } from 'mobx'

export default class CartStore {
    constructor() {
        this._cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
        makeAutoObservable(this)
    }

    setCartItems(cartItem) {
        this._cartItems = [...this._cartItems, cartItem]
        localStorage.setItem("cartItems", JSON.stringify(this._cartItems))
    }

    removeCartItem(id) {
        this._cartItems = this._cartItems.filter((item) => item.id !== id)
        localStorage.setItem("cartItems", JSON.stringify(this._cartItems))
    }

    increaseQuantity(id) {
        this._cartItems.forEach((item) => item.id === id ? item.quantity += 1 : item.quantity = item.quantity)
    }

    decreaseQuantity(id) {
        this._cartItems.forEach((item) => item.id === id ? item.quantity -= 1 : item.quantity = item.quantity)
    }

    get cartItems() {
        return this._cartItems
    }

}