const CORS_PROXY = "https://cors-proxy.htmldriven.com/?url="

export const LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
export const CARD_IMAGE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nnlqnlk4peffvwhqhlol"
export const CLOUDINARY__IMAGE_PREFIX = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export const DEFAULT_LAT_LANG  = '&lat=12.9715987&lng=77.5945627'
export const SWIGGY_RESTAURANT_API_END_POINT = `https://www.swiggy.com/dapi/restaurants/list/v5?is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
export const SWIGGY_RESTAURANT_DETAIL_API_END_POINT = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=`
export const LOCATION_SUGGESTION_API_END_POINT = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=`
export const ADDRESS_RECOMMEND_API_END_POINT = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=`
export const DEFAULT_FOOD_IMAGE_URL = 'https://play-lh.googleusercontent.com/JA0qswBq-iSo5HbTZyyqAEYEdQ-9JjmkNqxyCqAndO8JzHwKnRSzcGrKdhrshDxw4w=w480-h960-rw'
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

export const categoryType = {
    ITEM_CATEGORY: 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
    NESTED_ITEM_CATEGORY : 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
}
