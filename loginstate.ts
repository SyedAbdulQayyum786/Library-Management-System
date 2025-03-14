import { atom } from "recoil";
import { AllLibraryMembers, AllRequests, Book, Member, Requests } from "../../Object";
import { Libraries } from "../../Object";
import allLibraries from "../../Object";
const loginstate = atom({
    key: 'Login',
    default: false,
  });
export {loginstate}

const UserRole=atom({
    key:'UserRole',
    default:'',
});
export {UserRole}

const UserName=atom({
    key:'UserName',
    default:'',

});
export {UserName}
const AllBooks=atom<Book[]>({
    key:'Books',
    default:[]
});

export {AllBooks}

const mylibraries=atom<Libraries[]>({
    key:'Libraries',
    default:allLibraries
});

export {mylibraries}

const Allmembers=atom<Member[]>({
    key:'Members',
    default:AllLibraryMembers
})

export {Allmembers}

const assignedLibraries=atom<Libraries[]>({
    key:'AssignedLibraries',
    default:[]
})

export {assignedLibraries}

const logo = atom({
    key: 'Logo',
    default: '',
  });
export {logo}


const requestofreader=atom<Requests[]>({
    key:'Readers Requests',
    default:[]
})

export {requestofreader}

const requestsatsuperadmin=atom<Requests[]>({
    key:'SuperAdmin Requests',
    default: AllRequests
})
export {requestsatsuperadmin}

const requestoflibrarian=atom<Requests[]>({
    key:'Librarians Requests',
    default:[]
})
export {requestoflibrarian}
 
const issuedbookscount = atom({
    key: 'issuedbooks',
    default: 0,
  });
export {issuedbookscount}