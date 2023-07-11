function useAuth (email) {

  return {
    isAuth : !! email,
  }
}

export  { useAuth } 