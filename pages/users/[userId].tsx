import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { UserBio } from "@/components/users/UserBio";
import { UserHero } from "@/components/users/UserHero";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = ()=>{
    const router = useRouter()
    const {userId} = router.query
    const {data:user,isLoading} = useUser(userId as string)
    if(isLoading || !user)
    {
        return <div className="
        flex justify-center items-center
        h-full">
            <ClipLoader color="lightblue" size={80}/>
        </div>
    }
    return <>
        <Header label={user?.name} showBackArrow/>
            <UserHero userId={userId as string}/> 
            <UserBio userId={userId as string}/>
            <PostFeed userId={userId as string}/>
    </>
}

export default UserView;