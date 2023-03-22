import Image from "next/image";

export const Welcome = () => {
  return (
    <div className="text-center">
      <p>
        <Image src="/images/CLogo.png" alt="chealing" width={70} height={70} />
      </p>
      
<h1 className="text-center mt-5">COMING OON!</h1>
      <p> A simple, supportive approach to mental health care</p>
    </div>
  );
};
