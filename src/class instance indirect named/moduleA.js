import c from './moduleC'

class ClassA {
  property = 'foo'

  hello() {
    return 'world'
  }

  useC() {
    return 'use' + c()
  }
}

const instanceA = new ClassA();

export {
  instanceA,
} 
