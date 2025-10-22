const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
  filteredHeroes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        filteredHeroes:
          state.activeFilter === 'all'
            ? action.payload
            : action.payload.filter(hero => hero.element === state.activeFilter),
        heroesLoadingStatus: 'idle',
      };

    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersLoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        filtersLoadingStatus: 'error',
      };
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
        filteredHeroes:
          action.payload === 'all' ? state.heroes : state.heroes.filter(hero => hero.element === action.payload),
      };

    case 'HERO_CREATED':
      let newCreatedHero = action.payload;
      return {
        ...state,
        heroes: [...state.heroes, newCreatedHero],
        filteredHeroes:
          state.activeFilter === 'all'
            ? [...state.heroes, newCreatedHero]
            : [...state.heroes, newCreatedHero].filter(hero => hero.element === state.activeFilter),
      };

    case 'HERO_DELETED':
      const newHeroList = state.heroes.filter(hero => hero.id !== action.payload);
      return {
        ...state,
        heroes: newHeroList,
        filteredHeroes:
          state.activeFilter === 'all' ? newHeroList : newHeroList.filter(hero => hero.element === state.activeFilter),
      };

    default:
      return state;
  }
};

export default reducer;
