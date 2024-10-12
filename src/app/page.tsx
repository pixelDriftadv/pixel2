import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  return (
    <main className=" min-h-screen h-auto w-full bg-white">
      <header className="h-auto p-6 bg-white w-full flex flex-row shadow-xl">
        <div className=" w-4/5 h-full flex flex-row items-center space-x-4">
          <Image
            src={'/logo_pixels.png'}
            alt="logo"
            unoptimized
            width={100}
            height={100}
            className=" h-12 w-auto brightness-125"
          />
          <h1 className="text-xl text-black/80">
            DeepThreads by <span className=" font-semibold"> Pixel </span>
          </h1>
        </div>
        <div className=" w-1/5 h-full flex items-center justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant={'ghost'}
                className=" bg-white outline-none border-none"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8H13.75M5 12H19M10.25 16L19 16"
                    stroke="#464455"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>
                    <span className="py-6 my-6">Home</span>
                  </DrawerTitle>
                  <DrawerDescription className=" opacity-0">
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>

      <div className="main-content py-24 min-h-96 h-auto space-y-4 w-full flex-col flex items-center justify-center">
        <h1 className=" text-5xl text-blue-500">
          New way to <span className=" text-green-500 "> chat</span>
        </h1>
        <div className=" h-auto p-3 rounded-2xl w-80 bg-blue-200 flex ite justify-center">
          <h1 className=" text-xl text-blue-600">
            Say Hi to <span className=" font-semibold"> DeepThreads </span>
          </h1>
        </div>
        <div className=" py-2 h-auto w-full space-x-8 flex overflow-scroll items-center justify-center px-24 flex-row">
          <div className="h-auto py-3 w-[40vw] rounded-3xl">
            <Dialog>
              <DialogTrigger>
                <button className=" h-auto p-2 px-6 rounded-3xl w-auto outline outline-1 outline-gray-500 text-blue-500">
                  Features
                </button>
              </DialogTrigger>
              <DialogContent className=" bg-blue-200 rounded-2xl p-6 outline-none border-none">
                <DialogHeader>
                  <DialogTitle>
                    <span className="py-4 text-blue-700 text-3xl font-semibold">
                      Features
                    </span>
                  </DialogTitle>
                  <DialogDescription className=" py-6 text-xl text-blue-600">
                    Upcoming
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="h-auto py-3 w-[40vw]rounded-3xl">
            <Dialog>
              <DialogTrigger>
                <button className=" h-auto p-2 px-6 rounded-3xl w-auto bg-blue-200 text-blue-700">
                  About
                </button>
              </DialogTrigger>
              <DialogContent className=" bg-blue-200 rounded-2xl p-6 outline-none border-none">
                <DialogHeader>
                  <DialogTitle>
                    <span className="py-4 text-blue-700 text-3xl font-semibold">
                      About
                    </span>
                  </DialogTitle>
                  <DialogDescription className=" py-6 text-xl text-blue-600">
                    Upcoming
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className=" w-[25rem] h-96 bg-black rounded-3xl bg-[url('/ss.png')] bg-cover"></div>
      </div>

      <div className=" sec-content mb-24 h-auto min-h-96 w-full flex flex-col text-left p-12 rounded-[2.5rem] bg-blue-200">
        <h1 className=" text-2xl font-medium">
          {' '}
          Tired of <span className=" text-red-600"> boring </span> profile
          pictures?
        </h1>
        <Image
          src={'/rec.gif'}
          alt="rec"
          width={100}
          height={100}
          className="w-full h-auto my-12 rounded-3xl"
        />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger>Any restrictions on messages?</AccordionTrigger>
            <AccordionContent>
              <span className=" text-blue-700">
                {' '}
                No, keep on chatting and replying with your friends all day
                long.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>What about my privacy?</AccordionTrigger>
            <AccordionContent>
              <span className=" text-blue-700">
                Only the number of followers are shown, not who follows you,
                neither who you follow.Your profile is only the only way to tell
                about you, your very own bio.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Finding me on this platform?</AccordionTrigger>
            <AccordionContent>
              <span className=" text-blue-700">
                You are granted a display name and a username. People could
                search your username globally and follow you. You could also
                share your profile.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="tsec min-h-96 h-auto w-full px-12 flex flex-col">
        <button className=" bg-blue-300 h-auto w-36 py-2 px-6 rounded-2xl mb-4 text-blue-700">
          Upcoming
        </button>
        <h1 className=" text-3xl text-gray-800">
          <span className=" text-[#7289da]"> Discord </span> inspired avatar
          <span className=" text-yellow-400"> decorations</span>
        </h1>
        <h1 className="py-2 text-xl text-gray-400">
          A wide variety to choose from, really a lot.
        </h1>
        <Image
          src={'/rec2.gif'}
          alt="rec"
          width={100}
          height={100}
          className="w-full h-auto my-12 rounded-3xl"
        />
      </div>

      <div className="h-auto w-full p-5 flex items-center justify-center">
        <h1 className=" text-sm text-black/90 font-semibold">
          © DeepThreads 2024
        </h1>
      </div>
    </main>
  );
}
