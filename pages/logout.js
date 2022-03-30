import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Logout = ({ providers }) => {
  const { data: session, status } = useSession()
  console.log('session: ', session)
  return (
    <div className="m-auto flex min-h-screen w-full flex-col items-center justify-center text-white">
      <Image
        className="mb-5"
        src="https://links.papareact.com/9xl"
        width={200}
        height={200}
      />
      {/* 
      {Object.values(providers).map((provider) => (
        <div key={provider.name}> */}
      <button
        className="mt-4 rounded-xl bg-green-500 p-5 text-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
      {/* </div>
      ))} */}
    </div>
  )
}

export default Logout

// export async function getServerSideProps() {
//   const providers = await getProviders()
//   return {
//     props: {
//       providers,
//     },
//   }
// }
