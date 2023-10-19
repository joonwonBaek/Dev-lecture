import { request } from "./api.js";
import { getItem, removeItem, setItem } from "./storage.js";
import Editor from "./Editor.js";
import LinkButton from "./LinkButton.js";

export default function PostEditPage({$target, initialState}) {
    const $page = document.createElement('div');

    this.state = initialState;

    let postLocalSaveKey = `temp-post-${this.state.postId}`; //key가 바뀌지 않아서 let으로 선언

    const post = getItem(postLocalSaveKey, {
        title: "",
        content: ""
    })

    let timer = null;

    const editor = new Editor({
        $target: $page, 
        initialState: post,
        onEditing: (post) => {
            if (timer != null){
                clearTimeout(timer);
            }
            timer = setTimeout(async () => {
                // 입력을 연속으로 할 떄 이벤트 발생을 지연시키다가 입력을 멈췄을때 지연시켰던 이벤트를 실행
                setItem(postLocalSaveKey, {
                    ...post,
                    tempSaveDate: new Date()
                })

                const isNew = this.state.postId === 'new'
                if(isNew) {
                    const createdPost = await request('/posts', {
                        method: 'POST',
                        body: JSON.stringify(post)
                    })
                    history.replaceState(null, null, `/posts/${createdPost.id}`)
                    removeItem(postLocalSaveKey)

                    this.setState({
                        postId: createdPost.id
                    })
                } else {
                    await request(`/posts/${post.id}`, {
                        method: 'PUT',
                        body: JSON.stringify(post)
                    })
                    removeItem(postLocalSaveKey)
                }
            }, 2000)
        }
    })

    this.setState = async nextState => {
        if(this.state.postId !== nextState.postId) {
            postLocalSaveKey = `temp-post-${nextState.postId}`
            this.state = nextState
            if (this.postId === 'new'){
                const post = getItem(postLocalSaveKey, {
                    title: "",
                    content: ""
                })
                this.render()
                editor.setState(post)
            } else{
                await fetchPost()
            }
            return
        }
        
        this.state = nextState;
        this.render()

        editor.setState(this.state.post || {
            title: "",
            content: ""
        })
    }

    this.render = () => {
        $target.appendChild($page)
    }

    const fetchPost = async () => {
        const { postId } = this.state;
        
        if( postId !== 'new') {
            const post = await request(`/posts/${postId}`)

            const tempPost = getItem(postLocalSaveKey, {
                title: "",
                content: ""
            })
            console.log(tempPost);
            if(tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) { //db 데이터 최신 불러옴
                if(confirm('저장되지 않은 임시 데이터가 있습니다. 불러올까요?')) {
                    this.setState({
                        ...this.state,
                        post: tempPost
                    })
                    return
                }
            }

            this.setState({
                ...this.state,
                post
            })
        }
    }

    new LinkButton({
        $target: $page,
        initialState: {
            text: '목록으로 이동',
            link: '/'
        }
    })
}