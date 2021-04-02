import { projectFirestore } from '@/firebase/config'
import { Ref, ref } from 'vue'

const getCollection = (collection: string) => {
  const documents: Ref<any[]|null> = ref(null)
  const error: Ref<string|null> = ref(null)

  const collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  collectionRef.onSnapshot(snap => {
    documents.value = snap.docs
      .map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      .filter((doc: any) => doc.createdAt)
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  return { error, documents }
}

export default getCollection
