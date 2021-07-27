import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { add, selectBasket } from "../redux/basket/basket.slice"
import { useFetch } from "../utils/getData.effect"
import { AddRemoveBtn, Post, UserTitle } from "./home/home.components"

const Posts = ({ userId, userName }) => {

    const { data } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const dispatch = useDispatch()
    const basket = useSelector(selectBasket)

    return (
        <>
            <UserTitle>{userName} posts</UserTitle>
            {
                data.filter(post => post.userId === +userId).map(({ id, title }) => {
                    return <Post key={id}>
                        <Link to={`/edit/${userId}/${id}`}>
                            {title}
                        </Link>

                        {
                            basket.find(item => item.id === id && item.userId === userId) === undefined &&
                                 <AddRemoveBtn onClick={() => dispatch(add({ title, id, userName, userId }))}>add to card</AddRemoveBtn>
                        }
                    </Post>
                })
            }
        </>
    )
}

export default Posts
