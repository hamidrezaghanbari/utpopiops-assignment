import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Btn, ButtonsSec, EditPageWrapper, FormWrapper, Msg } from "../components/edit-post/edit-post.components"
import InputSec from "../components/edit-post/input-sec.component"
import { useFetch } from "../utils/getData.effect"

const EditPostPage = () => {
    let { id, userId } = useParams()

    const [titleError, setTitleError] = useState('')
    const [bodyError, setBodyError] = useState('')
    const [reqRes, setReqRes] = useState('')
    const [reqErr, setReqErr] = useState('')

    let { data, setData } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const history = useHistory()

    const handleCancel = () => {
        history.goBack()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!data.title || !data.body) return

        setReqErr('')
        setReqRes('')

        // *** request for put post
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: userId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => {
            setReqRes('your post is successfully updated')
        }).catch(err => {
            setReqErr(err.message)
        })

    }

    // *** the better way for handle input for form and error handling is use
    // *** very great library like react-hook-form but in this very little use case
    // *** i prefer to hardcoded with custom function
    const handleInputChange = (e, type) => {
        if (type === 'title') {
            setData({ ...data, title: e })

            if (!e) setTitleError('the title field is required')
            else setTitleError('')
        }
        else if (type === 'body') {
            setData({ ...data, body: e })

            if (!e) setBodyError('the body field is required')
            else setBodyError('')
        }
    }

    return (
        <EditPageWrapper>
            <FormWrapper onSubmit={handleSubmit}>
                
                <InputSec name="title" value={data.title} handleInputChange={handleInputChange} err={titleError} />
                <InputSec name="body" value={data.body} handleInputChange={handleInputChange} err={bodyError} />

                <ButtonsSec>
                    <Btn type="button" onClick={handleCancel} >cancel</Btn>
                    <Btn disabled={!data.title || !data.body} type="submit" onClick={handleSubmit}  >save</Btn>
                </ButtonsSec>

                {
                    reqRes && <Msg success>{reqRes}</Msg>
                }
                {
                    reqErr && <Msg>{reqErr}</Msg>
                }
            </FormWrapper>
        </EditPageWrapper>
    )
}

export default EditPostPage
