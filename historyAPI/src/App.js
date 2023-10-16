import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";

export default function( {$target}) {
    const homePage = new HomePage({$target});
    const productPage = new ProductPage({$target, initialState: {}})
    this.route = () => {
        // 여기서 pathnmae에 따라 page component 렌더링 처리
        const { pathname } = location;

        $target.innerHTML = '';
        if (pathname === '/' ) {
            // HomePage 그리기
            homePage.render();
        } else if (pathname.indexOf('/products') > -1) {
            // ProductPage 그리기
            // url에서 productId 뽑기
            const [,,productId] = pathname.split('/'); // split으로 나누면 배열 형태가 되는데 배열을 해제한다

            productPage.setState({
                productId
            })
        } else {
            $target.innerHTML = '<h1>404 Not Found!</h1> '
        }
    }

    this.init = () => {
        this.route();
    }

    window.addEventListener('click', e => {
        if (e.target.className === 'link') {
            e.preventDefault();
            const {href} = e.target;

            history.pushState(null, null, href.replace(location.origin, ''));
            this.route();
        }
    })

    window.addEventListener('popstate', () => this.route());

    this.init();
}