import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { CardBtn, HomeWrapper, PostsSec, UserCard, UsersSec } from "../components/home/home.components"
import Posts from "../components/posts.component"
import { selectBasket } from "../redux/basket/basket.slice"
import { useFetch } from "../utils/getData.effect"

const HomePage = () => {

    const [userName, setUserName] = useState('')
    const [userId, setUserId] = useState(null)

    const { data } = useFetch('https://jsonplaceholder.typicode.com/users')

    const basket = useSelector(selectBasket)
    const history = useHistory()

    return (
        <HomeWrapper>
            <UsersSec>
                {
                    data?.map(({ name, id }) => {
                        return (
                            <UserCard onClick={() => { setUserName(name); setUserId(id) }} isActive={userId === id && true} key={id}>{name}</UserCard>
                        )
                    })
                }
            </UsersSec>
            <PostsSec>
                {userId !== null && <Posts userName={userName} userId={userId} />}
            </PostsSec>

            <CardBtn onClick={() => history.push('/basket')}>
                <span>Card</span>
                {basket.length !== 0 && <small>{basket.length}  item</small>}
            </CardBtn>
        </HomeWrapper>
    )
}

export default HomePage
