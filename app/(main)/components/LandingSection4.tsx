import CheckboxIcon from "@public/svg/checkbox.svg";

export default function LandingSection4() {
  return (
    // [영역 4] 복잡한 펫보험 정보도 알기 쉽게

    <section className="flex w-full flex-col items-center bg-grayscale-05 py-[183px]">
      <p className="font-paperlogy-heading text-[40px] text-grayscale-100">
        복잡한 펫보험 정보도 알기 쉽게
      </p>
      <div className="mt-[40px] w-[800px] rounded-[20px] border-2 border-primary-50 bg-grayscale-00 text-[24px] font-medium text-grayscale-80">
        <div className="px-[93px] py-16">
          <p className="flex items-center">
            <CheckboxIcon className="mr-7" />
            보상 비율에 따른 세부 가격을 확인할 수 있어요.
          </p>
          <p className="mt-7 flex items-center">
            <CheckboxIcon className="mr-7" />
            걱정되는 질환의 보장 여부를 살펴볼 수 있어요.
          </p>
          <p className="mt-7 flex items-center">
            <CheckboxIcon className="mr-7" />
            가장 많은 청구 유형과 보험금 수령 유형을 알아볼 수 있어요.
          </p>
        </div>
      </div>
    </section>
  );
}
