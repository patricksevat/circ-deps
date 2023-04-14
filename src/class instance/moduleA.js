import c from './moduleC'

class ClassA {
  property = 'foo'

  hello() {
    return 'world'
  }

  useC() {
    return 'use' + c
  }
}

export default new ClassA();
