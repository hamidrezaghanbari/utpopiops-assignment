import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import {  Back, BasketSec, Item } from "../components/basket/basket.components"
import { AddRemoveBtn } from "../components/home/home.components"
import { remove, selectBasket } from "../redux/basket/basket.slice"

const BasketPage = () => {
    const basket = useSelector(selectBasket)
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <BasketSec>
            {basket.length !== 0 ? (
                basket.map(({userName, id, userId, title}) => <Item key={id}>
                <span>user name : {userName}</span>
                <span>title is : {title}</span>
                <AddRemoveBtn onClick={() => dispatch(remove({id, userId}))}>remove from basket</AddRemoveBtn>
            </Item>)
            ) : <Item empty>basket is empty</Item>}

            <Back onClick={() => history.goBack()}>back</Back>
        </BasketSec>
    )
}

export default BasketPage
