import { combineReducers } from 'redux';
import { defaults } from './defaults';

const gridReducer = (
  state = {
    grid: defaults.grid,
  },
  action
) => {
  switch (action.type) {
    case 'GRID': {
      return {
        ...state,
        grid: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const sizeReducer = (
  state = {
    width: defaults.width,
    height: defaults.height,
  },
  action
) => {
  switch (action.type) {
    case 'WIDTH': {
      return {
        ...state,
        width: action.payload,
      };
    }
    case 'HEIGHT': {
      return {
        ...state,
        height: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const colorReducer = (
  state = {
    color: defaults.color,
  },
  action
) => {
  switch (action.type) {
    case 'COLOR': {
      return {
        ...state,
        color: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const utilsReducer = (
  state = {
    contrast: defaults.contrast,
    scale: defaults.scale,
  },
  action
) => {
  switch (action.type) {
    case 'CONTRAST': {
      return {
        ...state,
        contrast: action.payload,
      };
    }
    case 'SCALE': {
      return {
        ...state,
        scale: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  sizeReducer,
  colorReducer,
  gridReducer,
  utilsReducer,
});
