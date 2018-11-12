export const AUTHENTICATED = 'authenticated';

export function authenticate(id) {
  return {
    type: AUTHENTICATED,
    payload: {
      user_id: id
    }
  }
}