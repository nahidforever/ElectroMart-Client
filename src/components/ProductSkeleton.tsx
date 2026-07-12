import { Card, CardContent } from "@/components/ui/card";

export default function ProductSkeleton() {
  return (
    <Card
      className="
      overflow-hidden
      rounded-3xl
      border-0
      shadow-md
      "
    >
      {/* Image Skeleton */}

      <div
        className="
        h-56
        w-full
        animate-pulse
        bg-slate-200
        "
      />

      <CardContent className="p-5">
        {/* Title */}

        <div
          className="
          h-5
          w-3/4
          animate-pulse
          rounded
          bg-slate-200
          "
        />

        {/* Brand */}

        <div
          className="
          mt-3
          h-4
          w-1/3
          animate-pulse
          rounded
          bg-slate-200
          "
        />

        {/* Meta */}

        <div className="mt-5 space-y-3">
          <div
            className="
            h-4
            w-full
            animate-pulse
            rounded
            bg-slate-200
            "
          />

          <div
            className="
            h-4
            w-2/3
            animate-pulse
            rounded
            bg-slate-200
            "
          />

          <div
            className="
            h-4
            w-1/2
            animate-pulse
            rounded
            bg-slate-200
            "
          />
        </div>

        {/* Price */}

        <div
          className="
          mt-5
          h-7
          w-1/2
          animate-pulse
          rounded
          bg-slate-200
          "
        />

        {/* Button */}

        <div
          className="
          mt-5
          h-11
          w-full
          animate-pulse
          rounded-xl
          bg-slate-200
          "
        />
      </CardContent>
    </Card>
  );
}
