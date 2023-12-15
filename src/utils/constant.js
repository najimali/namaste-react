export const LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
export const CARD_IMAGE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nnlqnlk4peffvwhqhlol"
export const CLOUDINARY__IMAGE_PREFIX = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const CORS_PROXY = "https://corsproxy.io/?"
export const SWIGGY_RESTAURANT_API_END_POINT = `${CORS_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
export const SWIGGY_RESTAURANT_DETAIL_API_END_POINT = `${CORS_PROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=`
export const apiActions = {
    FETCH_DATA: "fetchData",
    SET_DATA: "setData",
    SET_ERROR: "setError"
}
export const VEG_ICON_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
export const NON_VEG_ICON_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1920px-Non_veg_symbol.svg.png"
export const DEBOUNCE_DELAYS = {
    SEARCH_INPUT: 500,   // 500ms for search input
    WINDOW_RESIZE: 300,  // 300ms for window resize events
    TYPEAHEAD: 250       // 250ms for typeahead suggestions
};
