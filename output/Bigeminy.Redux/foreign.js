exports.mkAction = function(action) {
  return {
    type: action.constructor.name,
    purs: action,
  }
}
