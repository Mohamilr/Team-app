export const gifUploading = (state = false, action) => {
    switch (action.type) {
        case 'GIF_UPLOADING':
          return state = action.data;
        default:
          return state;
      }
}