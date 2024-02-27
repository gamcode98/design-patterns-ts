interface Strategy {
  login(user: string, password: string): boolean
}

class LoginContext {

  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password)
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if (user === 'admin' && password === 'admin') {
      console.log('login ok')
      return true
    }
    console.log('login error')
    return false
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('nos dirigimos a un servicio de autenticacion');
    if (user === 'admin' && password === 'admin') {
      console.log('login ok')
      return true
    }
    console.log('login error')
    return false
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('nos dirigimos a un google de autenticacion');
    if (user === 'admin' && password === 'admin') {
      console.log('login ok')
      return true
    }
    console.log('login error')
    return false
  }
}


const auth = new LoginContext(new LoginDBStrategy())
auth.login('admin', 'admin')
auth.setStrategy(new LoginServiceStrategy())
auth.login('admin', 'admin')
auth.setStrategy(new LoginGoogleStrategy())
auth.login('admin', 'admin')